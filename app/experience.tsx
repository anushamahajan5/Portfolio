'use client';

import { useState } from 'react';
import ArchitectureDiagram from './architecture-diagram';

type Role = {
  title: string;
  period: string;
  points: string[];
  tech: string;
};

type Company = {
  company: string;
  roles: Role[];
};

const experiences: Company[] = [
  {
    company: 'Goldman Sachs',
    roles: [
      {
        title: 'Software Engineer Analyst | Compliance & Risk Engineering',
        period: 'September 2026 - Present',
        points: [
          'Architect and maintain enterprise platforms designed to detect, mitigate, and manage regulatory and reputational risk across the firm.',
        ],
        tech: 'Risk platforms, enterprise systems, search and entity modeling',
      },
      {
        title: 'Engineering Analyst | GLobal Banking & Markets Division',
        period: 'July 2025 - September 2026',
        points: [
          'Engineered an event-driven Java, Kafka, and Protobuf pipeline generating ESMA/FCA short-sell indicators for real-time Order Management Systems.',
          'Reduced garbage-collection pauses on critical Albus sequencer paths through object pooling and flow separation for low-latency execution.',
          'Designed Spring-based pipelines to onboard 4 equity markets, generating 50,000+ tradables and maintaining consistent client order flows.',
          'Built MiFID II-compliant VICE workflows for SFTP delivery and PRAM reconciliation tools with custom Protobuf/FlatBuffers diffing.',
        ],
        tech: 'Java, Spring Boot, Kafka, Vert.x, Protobuf, SQL, microservices architecture',
      },
      {
        title: 'Summer Analyst Intern | GBM Division',
        period: 'May 2024 - July 2024',
        points: [
          'Created a Vert.x and Micrometer monitoring system to automate Ready For Business validation for Kafka financial reference data.',
          'Engineered a Python pipeline converting 500,000+ records into InfluxDB format and powered a React dashboard for 10+ EMEA datasets.',
        ],
        tech: 'Vert.x, Micrometer, ReactJS, Python, Web UI',
      },
    ],
  },
  {
    company: 'Grafieks',
    roles: [
      {
        title: 'Data Visualization Intern',
        period: 'February 2025 - May 2025',
        points: [
          'Built a combination chart for real-time database feeds using D3.js and Node.js.',
          'Redesigned 10+ data visualization, analytics dashboard, and SlickGrid table components to improve usability.',
        ],
        tech: 'Node.js, ReactJS, D3.js, SlickGrid',
      },
    ],
  },
  {
    company: 'Unstop',
    roles: [
      {
        title: 'Quality Assurance Intern',
        period: 'September 2024 - December 2024',
        points: [
          'Verified 50+ SQL queries and debugged 100+ test cases to ensure application functionality.',
          'Identified and resolved critical application bugs across key product workflows.',
        ],
        tech: 'SQL, DSA, quality assurance',
      },
    ],
  },
  {
    company: 'GeeksForGeeks',
    roles: [
      {
        title: 'Content Writing Intern',
        period: 'September 2023 - December 2023',
        points: [
          'Wrote 20+ articles on data structures and algorithms, contributing to the educational content library.',
        ],
        tech: 'Data Structures, Algorithms, technical writing',
      },
    ],
  },
];

export default function Experience() {
  const [activeCompany, setActiveCompany] = useState(0);
  const company = experiences[activeCompany];

  return (
    <section id="experience" className="py-20 px-4 bg-[#0a192f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-[#ccd6f6]">Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-2">
              {experiences.map((entry, index) => (
                <button
                  key={entry.company}
                  type="button"
                  onClick={() => setActiveCompany(index)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeCompany === index
                      ? 'bg-[#64ffda] text-[#0a192f] font-semibold'
                      : 'text-[#8892b0] hover:text-[#64ffda]'
                  }`}
                >
                  {entry.company}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-[#112240] p-6 rounded-lg">
              <p className="eyebrow">{company.company}</p>
              {company.roles.map((role) => (
                <article className="experience-role" key={role.title}>
                  <h3 className="text-2xl font-bold mb-2 text-[#64ffda]">{role.title}</h3>
                  <p className="text-[#8892b0] mb-4">{role.period}</p>
                  <ul className="list-none text-[#a8b2d1] space-y-2">
                    {role.points.map((point) => (
                      <li key={point}>▹ {point}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-[#8892b0]">{role.tech}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
