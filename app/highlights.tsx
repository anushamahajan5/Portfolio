const highlights = [
  { label: "Goldman Sachs Engineering", detail: "Software Engineer Analyst, Search and Entity Model" },
  { label: "IIT (BHU) Varanasi Alumna", detail: "B.Tech in Electronics Engineering" },
  { label: "Top 60 LinkedIn-CoachIn Mentee", detail: "Selected for 1-to-1 mentorship by industry experts" },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">SIGNALS</p>
        <h2 className="text-4xl font-bold mb-10">Highlights</h2>
        <div className="highlights-grid">
          {highlights.map((highlight) => (
            <article className="highlight-card" key={highlight.label}>
              <span className="highlight-mark">✦</span>
              <div><h3>{highlight.label}</h3><p>{highlight.detail}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
