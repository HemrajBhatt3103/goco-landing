export default function GoWholesaleFooter() {
  return (
    <footer className="bg-secondary text-primary py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl font-semibold tracking-tight">GOCO</span>
              <span className="w-px h-5 bg-primary/20" />
              <span className="text-sm font-medium text-primary/60 tracking-wide">
                GoWholesale
              </span>
            </div>
            <p className="text-sm text-primary/40 max-w-xs">
              B2B digital operating layer for wholesalers and distributors.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#lead-form"
              className="text-sm text-primary/60 hover:text-primary transition-colors"
            >
              Early Access
            </a>
            <a
              href="#problems"
              className="text-sm text-primary/60 hover:text-primary transition-colors"
            >
              The Problem
            </a>
            <a
              href="/"
              className="text-sm text-primary/60 hover:text-primary transition-colors"
            >
              GOCO Home
            </a>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary/40">
            &copy; 2026 GOCO. All rights reserved.
          </p>
          <p className="text-xs text-primary/30">Powered by GOCO</p>
        </div>
      </div>
    </footer>
  );
}
