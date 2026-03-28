import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0a192f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-[#ccd6f6]">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-[#8892b0] mb-6">
              I am currently an Engineering Analyst at <a href="https://www.goldmansachs.com/what-we-do/ficc-and-equities/gset-equities" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Goldman Sachs</a>, where I maintain a central Reference Data Platform built on microservices architecture.
              Previously, I was a Summer Analyst Intern at Goldman Sachs and a Software Engineering Intern at <a href="https://www.grafieks.com/" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Grafieks</a>.
              I hold a Bachelor of Technology in Electronics Engineering from <a href="https://www.iitbhu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">IIT (BHU) Varanasi</a>.
            </p>
            <p className="text-[#8892b0] mb-6">
              Here are some technologies I have been working with:
            </p>
            <ul className="text-[#8892b0] list-none">
              <li>▹ Python</li>
              <li>▹ JavaScript</li>
              <li>▹ Java</li>
              <li>▹ C++</li>
              <li>▹ React</li>
              <li>▹ Node.js</li>
              <li>▹ SQL</li>
              <li>▹ Kafka</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/image.jpg"
              alt="Anusha Mahajan"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}