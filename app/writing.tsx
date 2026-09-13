const writings = [
  {
    title: "Where Shadows Mislead",
    date: "January 2026",
    excerpt: "As a child, I chased the outline at my feet, / When it vanished, my heart skipped a beat.",
    href: "https://whispersofthesoul10.wordpress.com/2026/01/26/where-shadows-mislead/",
    tone: "paper-rose",
  },
  {
    title: "Urges",
    date: "April 2025",
    excerpt: "The urge to have a place called home— / Not just walls, but arms to roam.",
    href: "https://whispersofthesoul10.wordpress.com/2025/04/15/urges/",
    tone: "paper-sage",
  },
  {
    title: "Letter to My Future Self",
    date: "April 2025",
    excerpt: "Dear future me, I hope you found joy in the end, / Or at least learned what happiness truly intends.",
    href: "https://whispersofthesoul10.wordpress.com/2025/04/13/letter-to-my-future-self/",
    tone: "paper-blue",
  },
  {
    title: "Roots, Rivers, and Resilience",
    date: "February 2025",
    excerpt: "Let the serene rain purify my soul, / Cleanse it like never before.",
    href: "https://whispersofthesoul10.wordpress.com/2025/02/23/roots-rivers-and-resilience/",
    tone: "paper-gold",
  },
  {
    title: "A Mind at War",
    date: "February 2025",
    excerpt: "Where did I lose the peace of my mind? / My inner chaos is keeping me bound.",
    href: "https://whispersofthesoul10.wordpress.com/2025/02/23/a-mind-at-war/",
    tone: "paper-lilac",
  },
  {
    title: "Scars into Strength",
    date: "February 2025",
    excerpt: "A quiet collection of words about what remains, what heals, and what grows stronger.",
    href: "https://whispersofthesoul10.wordpress.com/2025/02/23/scars-into-strength/",
    tone: "paper-cream",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="writing-showcase">
      <div className="writing-showcase-header">
        <div>
          <p className="eyebrow">/ writing</p>
          <h2>Echoes of my mind, written in lines.</h2>
          <p className="writing-intro">
            Poems and fragments from Whispers of the Soul, exploring memory, longing, identity, and becoming.
          </p>
        </div>
        <a className="view-all-writing" href="https://whispersofthesoul10.wordpress.com/" target="_blank" rel="noopener noreferrer">
          Explore collection <span aria-hidden>↗</span>
        </a>
      </div>

      <div className="writing-shelf">
        {writings.map((writing, index) => (
          <a
            className={`writing-pamphlet ${writing.tone}`}
            href={writing.href}
            target="_blank"
            rel="noopener noreferrer"
            key={writing.title}
          >
            <span className="pamphlet-index">0{index + 1}</span>
            <span className="pamphlet-date">{writing.date}</span>
            <h3>{writing.title}</h3>
            <p>{writing.excerpt}</p>
            <span className="pamphlet-link">Read poem <span aria-hidden>↗</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}
