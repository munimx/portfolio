export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12">
      <div className="max-w-content mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="font-mono text-[11px] text-muted">
            © 2026 Munim Ahmad. All rights reserved.
          </div>

          {/* Availability Status */}
          <div className="flex items-center gap-3">
            <div className="relative w-2 h-2">
              <span className="absolute inset-0 bg-accent-primary rounded-full animate-pulse" />
              <span className="absolute inset-0 bg-accent-primary rounded-full" />
            </div>
            <span className="font-mono text-[11px]">
              Available for AI Engineering roles
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
