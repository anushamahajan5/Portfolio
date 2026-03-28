"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  // Floating animation for avatar
  const avatarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    let raf: number;
    const animate = () => {
      if (avatarRef.current) {
        avatarRef.current.style.transform = `translateY(${Math.sin(frame / 40) * 16}px)`;
      }
      frame++;
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="intro" className="relative min-h-screen flex items-center px-4 bg-[#0a192f] overflow-hidden">
      {/* Animated background blob */}
      <div
        aria-hidden
        className="absolute left-[-120px] top-[-120px] w-[420px] h-[420px] bg-gradient-to-tr from-[#64ffda] via-[#5ee7df] to-[#ff6ec4] opacity-30 blur-3xl rounded-full animate-pulse z-0"
        style={{ filter: 'blur(120px)' }}
      />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="mb-12 md:mb-0 md:mr-8 animate-fadeInUp">
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#64ffda] via-[#5ee7df] to-[#ff6ec4] bg-clip-text text-transparent drop-shadow-lg animate-fadeInDown">
            Hi, I'm Anusha.
          </h1>
          <p className="text-2xl font-semibold mb-8 text-[#a8b2d1] animate-fadeIn">
            Software Engineer & Creative Developer<br/>
            <span className="text-[#64ffda] font-bold">Building delightful web experiences.</span>
          </p>
          <div className="space-x-4">
            <a
              href="mailto:anusha.mahajan.ece21@itbhu.ac.in"
              className="inline-flex items-center space-x-2 bg-[#64ffda] text-[#0a192f] px-7 py-3 rounded-full shadow-lg hover:bg-[#52e3c2] transition-all duration-300 scale-100 hover:scale-105 animate-fadeInUp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Say Hi!</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center space-x-2 border border-[#64ffda] text-[#64ffda] px-7 py-3 rounded-full hover:bg-[#64ffda] hover:text-[#0a192f] shadow-lg transition-all duration-300 scale-100 hover:scale-105 animate-fadeInUp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span>About Me</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center relative z-10 animate-fadeInUp">
          <div
            ref={avatarRef}
            className="rounded-full shadow-2xl border-4 border-[#64ffda] bg-[#112240] p-2 transition-transform duration-500"
            style={{ width: 410, height: 410, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Image
              src="/anusha.jpg"
              alt="Anusha Mahajan"
              width={400}
              height={400}
              className="rounded-full object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center', width: 400, height: 400 }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}