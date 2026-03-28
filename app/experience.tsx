'use client';

import { useState } from 'react';

export default function Experience() {
  const experiences = [
    {
      company: 'Goldman Sachs',
      title: 'Engineering Analyst (GSET Platform)',
      period: 'July 2025 - Present',
      points: [
        'Maintained a central Reference Data Platform built on microservices architecture, implementing data ingestion, enrichment, and transformation processes using ETL workflow to cater consumers',
        'Remodelled the Locates setup by publishing a new protobuf regulatory dataset, enabling short-sell eligibility across 5+ trading systems',
        'Collaborated cross-functionality with Compliance, Prime, platform team for enriching the existing datasets with additional fields with comprehensive QA and EXT testing',
        'Supported a new market within the XRDS platform using dependency injection, facilitating client orders through 5 new trade gates'
      ],
      tech: 'SpringBoot, Groovy, pub-sub model, observer pattern'
    },
    {
      company: 'Goldman Sachs Intern',
      title: 'Summer Analyst Intern (GBM Division)',
      period: 'May 2024 - July 2024',
      points: [
        'Kafka Stream Monitoring: Automated the validation of financial reference data used by downstream consumers using Ready For Business (RFB) checks',
        'Python Data Pipeline: Coded a firm-wide Python pipe to convert 500,000+ entries from JSON to InfluxDB format for real-time alerts',
        'Data Metrics UI: Built a consolidated dashboard for 10+ datasets in EMEA, color-coded (Red/Green) for instant risk (RFB) status identification'
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
      </div>
    </section>
  );
}