"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-yellow-500/20 py-4"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[var(--heritage-gold)] hover:opacity-80 transition"
        >
          NGUANCHIANG
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-sm tracking-widest uppercase">
          <a href="#hero" className="nav-link">
            Home
          </a>
          <a href="#heritage" className="nav-link">
            Heritage
          </a>
          <a href="#process" className="nav-link">
            Process
          </a>
          <a href="#categories" className="nav-link">
            Products
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--heritage-gold)]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-lg transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 py-6 border-b border-yellow-500/20" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-sm tracking-widest uppercase">
          <a href="#hero" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#overview" onClick={() => setOpen(false)}>
            Heritage
          </a>
          <a href="#process" onClick={() => setOpen(false)}>
            Process
          </a>
          <a href="#categories" onClick={() => setOpen(false)}>
            Products
          </a>
          <a href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </a>
        </div>
      </div>

      {/* Custom Link Style */}
      <style jsx>{`
        .nav-link {
          position: relative;
          color: white;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: -6px;
          background: linear-gradient(
            to right,
            var(--heritage-gold),
            transparent
          );
          transition: width 0.4s ease;
        }

        .nav-link:hover {
          color: var(--heritage-gold);
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}