export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-10 px-8">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-muted">
            Munim Ahmad — Lahore, Pakistan — 2026
          </div>

          <div className="flex items-center gap-3">
            <div className="font-mono text-[10px] text-muted">Available for work</div>
            <div className="relative w-1.5 h-1.5">
              <span className="absolute inset-0 bg-accent-primary rounded-full animate-pulse" />
              <span className="absolute inset-0 bg-accent-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
