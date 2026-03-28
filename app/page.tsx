import Nav from './nav';
import Hero from './hero';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
