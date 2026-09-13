const notes = [
  { title: "Protobuf schemas for distributed services", detail: "A practical checklist for evolving contracts without surprising consumers.", tag: "Distributed systems" },
  { title: "Monitoring real-time ETL with InfluxDB", detail: "How to turn pipeline health signals into useful operational feedback.", tag: "Data engineering" },
];

const articles = [
  {
    title: "Building a Company FAQ Assistant with MindsDB and OpenAI",
    detail: "A practical walkthrough of semantic search, company knowledge retrieval, and AI-assisted answers.",
    tag: "AI / backend",
    href: "https://medium.com/@anushamahajan5/building-a-company-knowledge-assistant-with-mindsdb-and-cohere-572dfff41b93",
  },
  {
    title: "My Experience Integrating Daytona for My ReactJs App",
    detail: "Lessons from using Daytona to streamline development environments for a React application.",
    tag: "Developer tooling",
    href: "https://medium.com/@anushamahajan5/my-experience-integrating-daytona-for-my-reactjs-app-%EF%B8%8F-97ad60e103e2",
  },
  {
    title: "CAT Interview Experience 2026",
    detail: "A structured account of the interview process, preparation, and lessons learned.",
    tag: "Experience",
    href: "https://medium.com/@anushamahajan5/cat-interview-experience-2026-4eec2caa0e0e",
  },
];

export default function EngineeringNotes() {
  return (
    <section id="notes" className="py-20 px-4">
      <div className="w-full mx-auto">
        <p className="eyebrow">FIELD NOTES</p>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="text-4xl font-bold mb-0">Engineering Notes</h2>
          <a className="view-all-writing" href="https://medium.com/@anushamahajan5" target="_blank" rel="noopener noreferrer">
            Read all on Medium <span aria-hidden>↗</span>
          </a>
        </div>
        <div className="notes-grid">
          {notes.map((note) => (
            <article className="note-card" key={note.title}>
              <span>{note.tag}</span>
              <h3>{note.title}</h3>
              <p>{note.detail}</p>
              <a href="#contact">Discuss the idea <span aria-hidden>↗</span></a>
            </article>
          ))}
        </div>
        <p className="eyebrow articles-eyebrow">ARTICLES</p>
        <div className="notes-grid">
          {articles.map((article) => (
            <a className="note-card article-card" href={article.href} target="_blank" rel="noopener noreferrer" key={article.title}>
              <span>{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.detail}</p>
              <span className="article-link">Read on Medium <span aria-hidden>↗</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
