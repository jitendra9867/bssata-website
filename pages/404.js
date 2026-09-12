import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="text-center page-container">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-saffron-50 to-gold-50 border border-saffron-100 flex items-center justify-center text-4xl mb-6">
          🙏
        </div>
        <h1 className="text-5xl md:text-6xl font-banner font-black text-gray-800 mb-3">
          404
        </h1>
        <p className="text-sm text-saffron-500 font-semibold mb-3">
          Page Not Found
        </p>
        <div className="ornament-line mb-5" />
        <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Let us help you find your way back.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary text-sm">
            ← Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
