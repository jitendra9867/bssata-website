import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';

const SRC = resolve('.', 'wordpress-plugin', 'bssata-headless-model', 'bssata-headless.php');
const ZIP = resolve('.', 'wordpress-plugin', 'bssata-headless-v2.5.0-about-buttons.zip');

console.log('*** ZIP BUILD START ***');
console.log('SRC=' + SRC);
console.log('SRC exists=' + existsSync(SRC));
console.log('ZIP target=' + ZIP);

if (!existsSync(SRC)) throw new Error('SRC missing');

let tmpBase = process.env.TEMP || process.env.TMP || process.env.TMPDIR || '';
if (!tmpBase) {
  try { tmpBase = execSync('powershell -NoProfile -Command $env:TEMP', { encoding: 'utf8' }).trim(); } catch {
    tmpBase = 'C:\\Windows\\Temp';
  }
}
tmpBase = tmpBase.replace(/"/g, '');
const psScript = join(tmpBase, 'wp_zip_' + Math.random().toString(36).slice(2,10) + '.ps1');
const tmpDir = join(tmpBase, 'wp_patch_' + Math.random().toString(36).slice(2,10));
mkdirSync(tmpDir, { recursive: true });
const pluginDir = join(tmpDir, 'bssata-headless-model');
mkdirSync(pluginDir, { recursive: true });
writeFileSync(join(pluginDir, 'bssata-headless.php'), readFileSync(SRC));
console.log('pluginDir=' + pluginDir);
console.log('plugin file size=' + readFileSync(join(pluginDir, 'bssata-headless.php')).length);

function esc(p){
  return "'" + p.replace(/\\/g,'\\\\').replace(/'/g,"''") + "'";
}
const chkDir = join(tmpBase, 'wp_patch_chk_' + Math.random().toString(36).slice(2,10));
const psContent =
  '$ErrorActionPreference = "Stop"\n' +
  '$src = ' + esc(pluginDir) + '\n' +
  '$zip = ' + esc(ZIP) + '\n' +
  'Write-Output ("PS_SRC=" + $src)\n' +
  'Write-Output ("PS_ZIP=" + $zip)\n' +
  'if (-Not (Test-Path $src)) { throw "SRC_DIR_MISSING" }\n' +
  'Remove-Item -Path $zip -ErrorAction SilentlyContinue -Force\n' +
  'Add-Type -AssemblyName System.IO.Compression.FileSystem\n' +
  '[System.IO.Compression.ZipFile]::CreateFromDirectory($src, $zip, [System.IO.Compression.CompressionLevel]::Optimal, $false)\n' +
  'Write-Output ("ZIP_OK=" + (Test-Path $zip))\n' +
  'if (Test-Path $zip) { Write-Output ("ZIP_BYTES=" + (Get-Item $zip).Length) }\n' +
  '$chk = ' + esc(chkDir) + '\n' +
  'Write-Output ("PS_CHK=" + $chk)\n' +
  'mkdir $chk -Force | Out-Null\n' +
  'Expand-Archive -Path $zip -DestinationPath $chk -Force\n' +
  'Get-ChildItem $chk -Recurse -File | Select-Object -ExpandProperty FullName | ForEach-Object { Write-Output ("ENTRY=" + ($_ -replace ".*\\\\","")) }\n' +
  'Remove-Item -Recurse -Force $chk -Force\n' +
  'Remove-Item -Path $zip -ErrorAction SilentlyContinue -Force\n';
writeFileSync(psScript, psContent + '\n');
console.log('psScript=' + psScript);
console.log('psScript size=' + readFileSync(psScript).length);
console.log('psScript head=' + readFileSync(psScript, 'utf8').slice(0, 500));

const psCmd = 'powershell -NoProfile -ExecutionPolicy Bypass -File "' + psScript.replace(/\\/g, '\\\\') + '"';
console.log('PS_CMD=' + psCmd.slice(0, 400));
let psOut = '';
try {
  psOut = execSync(psCmd, { windowsHide: true, encoding: 'utf8', stdio: ['pipe','pipe','pipe'] });
} catch (err) {
  psOut = (err.stdout || '') + '\n' + (err.stderr || '');
  console.log('PS_EXIT=' + (err.status || '?'));
}
console.log('PS_OUTPUT:');
console.log(psOut.trim());

try { rmSync(tmpDir, { recursive: true, force: true }); } catch {}
try { rmSync(psScript, { force: true }); } catch {}

console.log('existsSync(ZIP after)=' + existsSync(ZIP));
if (existsSync(ZIP)) console.log('ZIP final bytes=' + readFileSync(ZIP).length);
console.log('*** ZIP BUILD END ***');
