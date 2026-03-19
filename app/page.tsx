import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

export default function HomePage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 lg:ml-sidebar mt-nav min-h-screen">
        <Hero />
        <div className="border-t border-border max-w-content mx-auto relative">
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-bg px-3 font-mono text-[10px] text-accent-primary">Selected Work</span>
        </div>
        <Projects />
        <div className="border-t border-border max-w-content mx-auto relative">
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-bg px-3 font-mono text-[10px] text-accent-primary">Methodology</span>
        </div>
        <About />
        <div className="border-t border-border max-w-content mx-auto relative">
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-bg px-3 font-mono text-[10px] text-accent-primary">Experience</span>
        </div>
        <Experience />
        <div className="border-t border-border max-w-content mx-auto relative">
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-bg px-3 font-mono text-[10px] text-accent-primary">Contact</span>
        </div>
        <Contact />
      </main>

      <Footer />
    </>
  );
}
