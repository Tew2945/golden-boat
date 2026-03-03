"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "bg-black/90 backdrop-blur border-b border-yellow-500/20 py-4" : "py-6"}`}>
      <div className="container flex justify-between items-center">
        <div className="text-xl font-bold tracking-widest text-[var(--heritage-gold)]">
          NGUANCHIANG
        </div>

        <nav className="hidden md:flex gap-8 text-sm tracking-wide">
          <a href="#hero">Home</a>
          <a href="#overview">Our Heritage</a>
          <a href="#process">Process</a>
          <a href="#categories">Product</a>
        </nav>
      </div>
    </header>
  );
}