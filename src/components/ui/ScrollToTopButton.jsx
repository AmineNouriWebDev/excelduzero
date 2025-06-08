"use client";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Retour en haut de page"
      onClick={handleClick}
      className={`fixed bottom-4 right-4 z-[100] p-2 rounded-full shadow-lg bg-green-600 text-white hover:bg-green-700 transition-all border-2 border-white focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center justify-center
        md:bottom-8 md:right-8 md:p-3
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      style={{ boxShadow: "0 4px 24px 0 rgba(16,185,129,0.15)" }}
    >
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
