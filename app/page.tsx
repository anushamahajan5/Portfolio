import Nav from './nav';
import Hero from './hero';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import Highlights from './highlights';
import EngineeringNotes from './engineering-notes';
import Writing from './writing';
import Contact from './contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Nav />
      <main className="flex flex-col gap-8 pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Highlights />
        <EngineeringNotes />
        <Writing />
        <Contact />
      </main>
    </div>
  );
}
