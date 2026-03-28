export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#0a192f] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto text-center animate-fadeInUp">
        <div className="flex flex-col items-center mb-6">
          <span className="text-5xl md:text-6xl animate-bounce mb-2">👋</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#64ffda] via-[#5ee7df] to-[#ff6ec4] bg-clip-text text-transparent drop-shadow-lg">Let's Connect!</h2>
        </div>
        <p className="text-lg md:text-xl text-[#a8b2d1] mb-8 font-medium">
          Interested in collaborating, hiring, or just want to say hi?<br/>
          <span className="text-[#64ffda] font-bold">My inbox is always open.</span>
        </p>
        <a
          href="mailto:anusha.mahajan.ece21@itbhu.ac.in"
          className="inline-block bg-[#64ffda] text-[#0a192f] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#52e3c2] transition-all duration-300 scale-100 hover:scale-105 mb-8 animate-fadeInUp"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://github.com/anushamahajan5" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors text-3xl">
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/anusha-mahajan-136771194/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors text-3xl">
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </a>
          <a href="mailto:anusha.mahajan.ece21@itbhu.ac.in" aria-label="Email" className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors text-3xl">
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-7.065v16c0 1.104.896 2 2 2h19.97c1.104 0 2-.896 2-2v-16l-11.985 7.065zm11.985-9.065c0-1.104-.896-2-2-2h-19.97c-1.104 0-2 .896-2 2v.217l12 7.083 12-7.083v-.217z"/></svg>
          </a>
        </div>
        <p className="text-[#8892b0] mt-6 text-sm">Built and designed by Anusha Mahajan. All rights reserved. ©</p>
      </div>
    </section>
  );
}