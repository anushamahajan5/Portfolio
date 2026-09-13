"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const shouldUseLight = savedTheme === "light";
    document.documentElement.dataset.theme = shouldUseLight ? "light" : "dark";
    setIsLight(shouldUseLight);
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", nextIsLight ? "light" : "dark");
    setIsLight(nextIsLight);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className="theme-toggle"
    >
      <span aria-hidden>{isLight ? "☾" : "☀"}</span>
      <span>{isLight ? "Dark" : "Light"}</span>
    </button>
  );
}
