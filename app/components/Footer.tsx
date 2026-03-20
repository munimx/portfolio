export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-8 h-24">
      <div className="max-w-content mx-auto h-full">
        <div className="flex h-full flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-muted">
            Munim Ahmad — Lahore, Pakistan — 2026
          </div>

          <div className="flex items-center gap-3">
            <span className="live-dot" />
            <div className="font-mono text-[10px] text-muted">Available for work</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
