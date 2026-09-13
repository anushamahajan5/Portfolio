const notes = [
  { title: "Protobuf schemas for distributed services", detail: "A practical checklist for evolving contracts without surprising consumers.", tag: "Distributed systems" },
  { title: "Monitoring real-time ETL with InfluxDB", detail: "How to turn pipeline health signals into useful operational feedback.", tag: "Data engineering" },
];

export default function EngineeringNotes() {
  return (
    <section id="notes" className="py-20 px-4">
      <div className="w-full mx-auto">
        <p className="eyebrow">FIELD NOTES</p>
        <h2 className="text-4xl font-bold mb-10">Engineering Notes</h2>
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
      </div>
    </section>
  );
}
