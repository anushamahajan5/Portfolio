'use client';

import { useState } from 'react';
import ArchitectureDiagram from './architecture-diagram';

export default function Experience() {
  const experiences = [
    {
      company: 'Goldman Sachs',
      title: 'Software Engineer Analyst | Search & Entity Model',
      period: 'September 2026 - Present',
      points: [
        'Architect and maintain enterprise platforms designed to detect, mitigate, and manage regulatory and reputational risk across the firm.'
      ],
      tech: 'Risk platforms, enterprise systems, search and entity modeling'
    },
    {
      company: 'Goldman Sachs',
      title: 'Software Engineering Analyst | GSET Platform',
      period: 'July 2025 - September 2026',
      points: [
        'Engineered multi-channel ETL pipelines processing high-volume daily reference data, cutting downstream latency across 5+ trading gates.',
        'Modeled regulatory datasets with Protobuf and leveraged Kafka pub-sub and observer patterns for low-latency distribution across 5+ downstream trading systems.'
      ],
      tech: 'Java, Spring Boot, Groovy, Kafka, Protobuf, microservices'
    },
    {
      company: 'Goldman Sachs Intern',
      title: 'Summer Analyst Internship | Goldman Sachs',
      period: 'May 2024 - July 2024',
      points: [
        'Validated live Kafka data streams with Ready For Business checks, built Python pipelines to store metrics in InfluxDB, and created real-time health-monitoring dashboards.'
      ],
      tech: 'Vert.x, Micrometer, ReactJS, Python'
    },
    {
      company: 'Grafieks',
      title: 'Software Engineering Intern',
      period: 'February 2025 - May 2025',
      points: [
        'Combination Chart Visualization: Enhanced the multi-dimensional metric data visualization dashboard by adding a combination chart for real-time database feeds',
        'UI Enhancement & Design Alignment: Redesigned 10+ key data visualization components, including charts, Reports, and tables, resulting in a more cohesive and intuitive user experience'
      ],
      tech: 'Node.js, ReactJS, D3.js, SlickGrid'
    },
    {
      company: 'Unstop',
      title: 'Quality Assurance Intern',
      period: 'September 2024 - December 2024',
      points: [
        'Verified 50+ SQL queries and debugged 100+ test cases to ensure functionality.',
        'Bug Resolution: Identified and resolved critical application bugs.'
      ],
      tech: 'SQL, DSA'
    },
    {
      company: 'GeeksForGeeks',
      title: 'Content Writing Intern',
      period: 'September 2023 - December 2023',
      points: [
        'Wrote 20+ articles on data structures and algorithms, contributing to the educational content library.',
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 px-4 bg-[#0a192f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-[#ccd6f6]">Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === index
                      ? 'bg-[#64ffda] text-[#0a192f] font-semibold'
                      : 'text-[#8892b0] hover:text-[#64ffda]'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2 text-[#64ffda]">{experiences[activeTab].title}</h3>
              <p className="text-xl font-semibold text-[#ccd6f6] mb-2">{experiences[activeTab].company}</p>
              <p className="text-[#8892b0] mb-4">{experiences[activeTab].period}</p>
              <ul className="list-none text-[#a8b2d1] space-y-2">
                {experiences[activeTab].points.map((point, idx) => (
                  <li key={idx}>▹ {point}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[#8892b0]">{experiences[activeTab].tech}</p>
            </div>
          </div>
        </div>
        <ArchitectureDiagram />
      </div>
    </section>
  );
}