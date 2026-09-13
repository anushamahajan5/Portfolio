import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0a192f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-[#ccd6f6]">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-base text-[#8892b0] mb-6">
              I am a Software Engineer Analyst on the Search and Entity Model team at <a href="https://www.goldmansachs.com/what-we-do/ficc-and-equities/gset-equities" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Goldman Sachs</a>, where I build and maintain platforms that help detect, mitigate, and manage regulatory and reputational risk across the firm.
              Previously, I worked on the GSET Reference Data Platform at Goldman Sachs and was a Software Engineering Intern at <a href="https://www.grafieks.com/" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Grafieks</a>.
              I hold a Bachelor of Technology in Electronics Engineering from <a href="https://www.iitbhu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">IIT (BHU) Varanasi</a>.
            </p>
            <p className="text-base text-[#8892b0] mb-6">
              Here are some technologies I have been working with:
            </p>
            <div className="space-y-5 text-[#8892b0]">
              <div>
                <h3 className="text-lg font-semibold text-[#64ffda] mb-2">Primary</h3>
                <p className="text-sm">Java · Spring · Kafka · Vert.x · Microservices · System Design · Low-Latency Systems · ETL Pipelines · SQL</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#64ffda] mb-2">Secondary</h3>
                <p className="text-sm">Python · C++ · JavaScript · React · Node.js · Express · Protobuf · FlatBuffers · Micrometer · Prometheus · D3.js · InfluxDB</p>
              </div>
            </div>
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