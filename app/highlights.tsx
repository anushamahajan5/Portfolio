const highlights = [
  { label: "CodeChef Global Rank 24", detail: "Ranked 24th globally in the April Long Challenge 2022 among 12,000 participants." },
  { label: "AWS AI & ML Scholar", detail: "Selected among 500 global participants for the Udacity AWS AI & ML Scholarship." },
  { label: "Top 60 LinkedIn-CoachIn Mentee", detail: "Selected for DSA mentorship by LinkedIn industry experts in 2023." },
  { label: "IIT (BHU) Varanasi Alumna", detail: "B.Tech in Electronics Engineering with a CPI of 8.76." },
  { label: "Goldman Sachs Engineering", detail: "Engineering Analyst building event-driven regulatory data platforms." },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 px-4">
      <div className="w-full mx-auto">
        <p className="eyebrow">SIGNALS</p>
        <h2 className="text-4xl font-bold mb-10">Honors & Education</h2>
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
