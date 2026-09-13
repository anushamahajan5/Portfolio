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
          'Architect and maintain enterprise search and entity-modeling platforms that prevent, detect, and mitigate regulatory and reputational risk across the firm.',
        ],
        tech: 'Enterprise Risk Platforms, Search and Entity Modeling, Microservices',
      },
      {
        title: 'Software Engineering Analyst | Global Banking & Markets Division, GSET',
        period: 'July 2025 - September 2026',
        points: [
          'Engineered Java-based ETL workflows and Spring Boot microservices to fetch, transform, and enrich static reference data for real-time downstream Order Management Systems.',
          'Designed event-driven Kafka pipelines with publisher-subscriber and observer patterns for low-latency reference data distribution across trading workflows.',
          'Optimized Albus sequencer execution paths with object pooling and flow separation, reducing garbage-collection pauses across critical low-latency workloads.',
          'Built MiFID II-compliant VICE workflows and PRAM reconciliation tools, including custom Protobuf and FlatBuffers diffing for daily exchange-file validation.',
        ],
        tech: 'Java, Spring Boot, Apache Kafka, Vert.x, Microservices, Protobuf, FlatBuffers, SQL',
      },
      {
        title: 'Summer Analyst | Global Banking & Markets Division',
        period: 'May 2024 - July 2024',
        points: [
          'Implemented Ready For Business validation with Vert.x and Micrometer to monitor Kafka streams carrying financial reference data.',
          'Engineered a Python pipeline converting 500,000+ JSON records into InfluxDB format and powering a React dashboard with Red/Green health indicators across 10+ EMEA datasets.',
        ],
        tech: 'Python, Vert.x, Micrometer, Apache Kafka, InfluxDB, React',
      },
    ],
  },
  {
    company: 'Grafieks',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: 'February 2025 - May 2025',
        points: [
          'Built D3.js and Node.js combination charts to visualize multiple real-time metrics in a unified dashboard.',
          'Redesigned 10+ data visualization screens, analytics dashboards, and SlickGrid table components to improve usability and navigation.',
        ],
        tech: 'Node.js, React, D3.js, SlickGrid, JavaScript',
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
          'Validated 50+ SQL queries, debugged 100+ test cases, and identified and resolved critical defects across core product workflows.',
        ],
        tech: 'SQL, Test Case Design, Quality Assurance, Debugging',
      },
    ],
  },
  {
    company: 'LinkedIn',
    roles: [
      {
        title: 'LinkedIn-CoachIn Mentee',
        period: 'April 2023 - October 2023',
        points: [
          'Selected among the top 60 women in tech across India for one-on-one technical and career mentorship from LinkedIn industry experts.',
        ],
        tech: 'Data Structures and Algorithms, Technical Mentorship, Career Development',
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
          'Authored 20+ technical articles on data structures and algorithms for the core educational library.',
        ],
        tech: 'Data Structures, Algorithms, Technical Writing',
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
