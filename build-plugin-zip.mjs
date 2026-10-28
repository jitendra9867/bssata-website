import { readdirSync, statSync, mkdirSync, writeFileSync, existsSync, copyFileSync, rmSync } from 'fs';
import { join, dirname, relative, resolve, sep } from 'path';
import { execSync } from 'child_process';

// --- config ---
const SRC_DIR = 'wordpress-plugin/bssata-headless-model';
const ZIP_OUT = 'wordpress-plugin/bssata-headless-v2.7.0.zip';

const isWin = typeof process !== 'undefined' && process.platform === 'win32';
const tmpBase = isWin
  ? 'C:\\Users\\JITEND~1.KUM\\AppData\\Local\\Temp'
  : '/tmp';
const rnd = Math.random().toString(36).slice(2, 10);
const tmpDir = join(tmpBase, 'wp_zip_src_' + rnd);
const tmpZip = join(tmpBase, 'wp_zip_' + rnd + '.zip');
const tmpChk = join(tmpBase, 'wp_zip_chk_' + rnd);

// --- decide what to zip ---
// Either SRC_DIR is a folder containing bssata-headless-model/bssata-headless.php
// or SRC_DIR itself is the single .php file. In both cases we want the zip to
// contain bssata-headless-model/bssata-headless.php so WP sees the plugin folder.
const isSingleFile = statSync(SRC_DIR).isFile();
const PLUGIN_SLUG = 'bssata-headless-model';
const pluginTop = join(tmpDir, PLUGIN_SLUG);
let sourceFiles = [];
if (isSingleFile) {
  sourceFiles = [{ src: SRC_DIR, rel: 'bssata-headless.php' }];
} else {
  (function walk(dir) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else sourceFiles.push({ src: p, rel: relative(SRC_DIR, p) });
    }
  })(SRC_DIR);
}
console.log('srcDir=' + SRC_DIR);
console.log('isSingleFile=' + isSingleFile);
console.log('filesToZip=' + sourceFiles.length);

// --- copy into clean staging dir, inside the plugin folder WordPress expects ---
rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(pluginTop, { recursive: true });
for (const f of sourceFiles) {
  if (typeof f.rel !== 'string' || f.rel.startsWith('..')) continue;
  const dest = join(pluginTop, f.rel);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(f.src, dest);
}
console.log('staged into ' + pluginTop);

const stagedFiles = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else stagedFiles.push({ abs: resolve(p), entry: relative(tmpDir, p).split(sep).join('/') });
  }
})(tmpDir);

let ok = false;
let lines = [];

if (isWin) {
  // Write the PS script to a temp .ps1 file so the command line is short and
  // newlines survive execSync.
  const psScript = [
    '$src = ' + JSON.stringify(tmpDir),
    '$zip = ' + JSON.stringify(tmpZip),
    'if (-not (Get-ChildItem -Path $src -Recurse -File)) { Write-Host "ZIP_OK=False"; exit 1 }',
    'Add-Type -AssemblyName System.IO.Compression',
    'Add-Type -AssemblyName System.IO.Compression.FileSystem',
    'if (Test-Path $zip) { Remove-Item -Force $zip }',
    /* ZipArchive lets us force forward-slash entry names; Compress-Archive and
       ZipFile::CreateFromDirectory write backslashes on Windows, which
       WordPress cannot unpack into a plugin folder. */
    '$archive = [System.IO.Compression.ZipFile]::Open($zip, [System.IO.Compression.ZipArchiveMode]::Create)',
    ...stagedFiles.map(function (f) {
      return '[void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, ' +
        JSON.stringify(f.abs) + ', ' + JSON.stringify(f.entry) + ')';
    }),
    '$archive.Dispose()',
    'if (-not (Test-Path $zip)) { Write-Host "ZIP_OK=False"; exit 1 }',
    '$chk = ' + JSON.stringify(tmpChk),
    'if (Test-Path $chk) { Remove-Item -Recurse -Force $chk }',
    'Expand-Archive -Path $zip -DestinationPath $chk -Force',
    'Get-ChildItem $chk -Recurse | Select-Object -ExpandProperty FullName',
    'Remove-Item -Recurse -Force $chk',
    '$bytes = (Get-Item $zip).Length',
    'Write-Host "ZIP_OK=True"',
    'Write-Host "ZIP_BYTES=$bytes"',
  ].join('\n');
  const psFile = join(tmpBase, 'wp_zip_ps_' + rnd + '.ps1');
  writeFileSync(psFile, psScript, 'utf8');
  try {
    const raw = execSync('powershell -NoProfile -ExecutionPolicy Bypass -File ' + JSON.stringify(psFile), {
      encoding: 'utf8',
      windowsHide: true,
      timeout: 90000,
    });
    lines = raw.split(/\r?\n/);
  } catch (e) {
    console.error('powershell zip failed:', e.stdout || e.message);
  } finally {
    try { rmSync(psFile, { force: true }); } catch {}
  }
} else {
  // Linux: use python's zipfile (no external binaries needed).
  const py = [
    'import zipfile, os, sys, shutil',
    'src = ' + JSON.stringify(tmpDir),
    'out = ' + JSON.stringify(tmpZip),
    'with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:',
    '    for root, dirs, fs in os.walk(src):',
    '        for f in fs:',
    '            full = os.path.join(root, f)',
    '            arc = os.path.relpath(full, src)',
    '            z.write(full, arc)',
    'print("ZIP_OK=True")',
    'print("ZIP_BYTES=" + str(os.path.getsize(out)))',
    'chk = ' + JSON.stringify(tmpChk),
    'if os.path.exists(chk): shutil.rmtree(chk, ignore_errors=True)',
    'os.makedirs(chk, exist_ok=True)',
    'with zipfile.ZipFile(out) as z: z.extractall(chk)',
    'for root, dirs, fs in os.walk(chk):',
    '    for f in fs: print("ENTRY=" + os.path.relpath(os.path.join(root, f), chk))',
    'shutil.rmtree(chk, ignore_errors=True)',
  ].join('\n');
  try {
    const raw = execSync('python -c ' + JSON.stringify(py), { encoding: 'utf8', timeout: 90000 });
    lines = raw.split(/\r?\n/);
  } catch (e) {
    console.error('python zip failed:', e.stdout || e.message);
  }
}

for (const line of lines) {
  if (line.startsWith('ZIP_OK=')) { ok = line.includes('True'); }
  if (line.startsWith('ZIP_BYTES=')) { console.log(line); }
  if (line.startsWith('ENTRY=')) { console.log(line); }
}

if (!ok) {
  console.error('ZIP BUILD FAILED');
  process.exit(1);
}

// verify the zip contains the expected php
rmSync(tmpChk, { recursive: true, force: true });
mkdirSync(tmpChk, { recursive: true });
try {
  if (isWin) {
    execSync('powershell -NoProfile -ExecutionPolicy Bypass -Command ' + JSON.stringify(
      '$zip=' + JSON.stringify(tmpZip) + '; $chk=' + JSON.stringify(tmpChk) +
      '; if (Test-Path $chk) { Remove-Item -Recurse -Force $chk }' +
      '; Expand-Archive -Path $zip -DestinationPath $chk -Force' +
      '; Get-ChildItem $chk -Recurse | Select-Object -ExpandProperty FullName' +
      '; Remove-Item -Recurse -Force $chk'
    ), { encoding: 'utf8', windowsHide: true, timeout: 60000 });
  } else {
    execSync('python -c ' + JSON.stringify(
      'import zipfile, os, shutil' +
      '; z=zipfile.ZipFile(' + JSON.stringify(tmpZip) + ')' +
      '; os.makedirs(' + JSON.stringify(tmpChk) + ', exist_ok=True)' +
      '; z.extractall(' + JSON.stringify(tmpChk) + ')' +
      '; [print(os.path.relpath(os.path.join(r,f), ' + JSON.stringify(tmpChk) + ')) for r,ds,fs in os.walk(' + JSON.stringify(tmpChk) + ') for f in fs]' +
      '; shutil.rmtree(' + JSON.stringify(tmpChk) + ', ignore_errors=True)'
    ), { encoding: 'utf8', timeout: 60000 });
  }
} catch (e) {
  console.error('zip verify failed:', e.stdout || e.message);
}
rmSync(tmpChk, { recursive: true, force: true });

// replace the staging dir with the final zip
rmSync(tmpDir, { recursive: true, force: true });
if (existsSync(ZIP_OUT)) rmSync(ZIP_OUT);
copyFileSync(tmpZip, ZIP_OUT);
rmSync(tmpZip, { force: true });

const finalBytes = existsSync(ZIP_OUT) ? statSync(ZIP_OUT).size : -1;
console.log('ZIP final bytes=' + finalBytes);
console.log('*** ZIP BUILD END ***');
if (!existsSync(ZIP_OUT) || finalBytes < 1000) {
  console.error('zip missing or too small');
  process.exit(1);
}
