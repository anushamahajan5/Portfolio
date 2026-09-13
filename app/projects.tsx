"use client";

import { useState } from "react";

type ProjectCategory =
  | "All"
  | "Distributed & Systems"
  | "AI & Machine Learning"
  | "Full-Stack & Web";

type Project = {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  tech: string;
  label: string;
  href?: string;
  visual: "pipeline" | "assistant" | "dashboard" | "research";
};

const categories: ProjectCategory[] = [
  "All",
  "Distributed & Systems",
  "AI & Machine Learning",
  "Full-Stack & Web",
];

const projects: Project[] = [
  {
    title: "Prototask",
    category: "Full-Stack & Web",
    description:
      "A full-stack productivity platform combining task management, habit tracking, notes, nutrition, workouts, shopping, expenses, and weekly insights in one responsive dashboard.",
    tech: "React 19 · Next.js · FastAPI · MongoDB · Motor · Tailwind CSS",
    label: "Full stack",
    href: "https://github.com/anushamahajan5/PersonalTracker",
    visual: "dashboard",
  },
  {
    title: "PersonalTracker",
    category: "Full-Stack & Web",
    description:
      "A full-stack productivity dashboard for tasks, habits, notes, nutrition, workouts, shopping, expenses, and weekly insights, with AI-assisted food parsing.",
    tech: "React · Next.js · FastAPI · MongoDB · Python · Gemini",
    label: "Full stack",
    href: "https://github.com/anushamahajan5/PersonalTracker",
    visual: "dashboard",
  },
  {
    title: "ResumeCurator",
    category: "AI & Machine Learning",
    description:
      "An AI-powered resume workflow that compares a PDF resume with a target job description, surfaces skill gaps, and generates a downloadable tailored resume.",
    tech: "JavaScript · React · Node.js · Express · OpenAI · SQLite",
    label: "AI / backend",
    href: "https://github.com/anushamahajan5/ResumeCurator",
    visual: "assistant",
  },
  {
    title: "Company Knowledge Assistant",
    category: "AI & Machine Learning",
    description:
      "An AI company knowledge assistant with semantic search, document summarization, feedback analysis, and scheduled updates.",
    tech: "Flask · MindsDB · OpenAI · ChromaDB",
    label: "AI / backend",
    href: "https://github.com/anushamahajan5/MindsDB_SemanticApp",
    visual: "assistant",
  },
  {
    title: "Diagnosis of Lung Abnormalities",
    category: "AI & Machine Learning",
    description:
      "Processed 2,000 lung sound files into spectrograms with Librosa and trained a CNN model that achieved 96% accuracy.",
    tech: "Python · Librosa · CNN",
    label: "Research & ML",
    href: "https://github.com/anushamahajan5/MOSAIC",
    visual: "research",
  },
  {
    title: "MERN Chat App",
    category: "Full-Stack & Web",
    description:
      "A real-time chat application with authentication, group and private messaging, notifications, and user search.",
    tech: "MongoDB · Express · React · Node.js · Socket.io",
    label: "Full stack",
    href: "https://github.com/anushamahajan5/MERN-chat-app",
    visual: "dashboard",
  },
];

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual project-visual-${project.visual}`} aria-hidden="true">
      <div className="visual-window-bar"><i /><i /><i /><span>{project.title.toLowerCase()}</span></div>
      {project.visual === "pipeline" && (
        <div className="visual-pipeline"><span>source</span><b>→</b><span>etl</span><b>→</b><span>kafka</span><b>→</b><span>gates</span></div>
      )}
      {project.visual === "assistant" && (
        <div className="visual-chat"><div className="chat-line short" /><div className="chat-line" /><div className="chat-line accent" /><div className="chat-line medium" /></div>
      )}
      {project.visual === "dashboard" && (
        <div className="visual-dashboard"><div className="metric-block" /><div className="metric-block large" /><div className="visual-chart"><i /><i /><i /><i /><i /></div></div>
      )}
      {project.visual === "research" && (
        <div className="visual-research"><div className="research-grid" /> <strong>96<span>%</span></strong><small>model accuracy</small></div>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const visibleProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="projects-showcase">
      <div className="projects-showcase-header">
        <div>
          <p className="eyebrow">/ software</p>
          <h2>Selected projects</h2>
        </div>
        <a className="view-all-projects" href="https://github.com/anushamahajan5" target="_blank" rel="noopener noreferrer">
          View all projects <span aria-hidden>↗</span>
        </a>
      </div>

      <div className="project-filter" role="tablist" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            className={activeCategory === category ? "is-active" : ""}
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-feature-list">
        {visibleProjects.map((project, index) => (
          <article className={`project-feature ${index % 2 === 1 ? "project-feature-reverse" : ""}`} key={project.title}>
            <ProjectVisual project={project} />
            <div className="project-feature-copy">
              <div className="project-feature-meta"><span>0{index + 1}</span><span>{project.label}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-feature-footer"><span>{project.tech}</span>{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>Explore ↗</a>}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
