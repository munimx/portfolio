import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 lg:ml-sidebar mt-nav min-h-screen">
        <section id="hero" className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-content">
            <h1 className="text-hero font-heading italic mb-6">
              Munim Ahmad
            </h1>
            <p className="text-section font-body mb-8">
              Full-Stack AI Engineer
            </p>
            <p className="text-lg text-muted max-w-2xl">
              Building practical AI products that work under real constraints: latency budgets, uptime targets, 
              and integration with existing enterprise systems.
            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-content">
            <h2 className="text-section font-heading italic mb-12">Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-border bg-bg hover:border-accent-primary transition-colors">
                <h3 className="text-card font-heading mb-4">Recallm</h3>
                <p className="text-muted mb-4">Semantic cache for LLMs. 40-70% cost reduction.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-ink/5 font-mono text-[10px]">Python</span>
                  <span className="px-3 py-1 bg-ink/5 font-mono text-[10px]">Redis</span>
                </div>
              </div>
              
              <div className="p-8 border border-border bg-bg hover:border-accent-primary transition-colors">
                <h3 className="text-card font-heading mb-4">DocuChat</h3>
                <p className="text-muted mb-4">Cross-platform AI PDF assistant with RAG.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-ink/5 font-mono text-[10px]">Electron</span>
                  <span className="px-3 py-1 bg-ink/5 font-mono text-[10px]">React</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-content">
            <h2 className="text-section font-heading italic mb-12">Methodology</h2>
            <p className="text-lg text-muted">About section coming soon...</p>
          </div>
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-content">
            <h2 className="text-section font-heading italic mb-12">Experience</h2>
            <p className="text-lg text-muted">Timeline coming soon...</p>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
          <div className="max-w-content">
            <h2 className="text-section font-heading italic mb-12">Appendix</h2>
            <p className="text-lg text-muted">Contact section coming soon...</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
