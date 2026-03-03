"use client";
import { useReveal } from "@/hooks/useReveal";

export default function Hero() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 container">
        <h1
          className={`font-serif text-5xl md:text-6xl mb-6 uppercase tracking-wider reveal ${
            visible ? "visible" : ""
          }`}
        >
          Golden Boat Brand
        </h1>

        <p
          className={`text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 reveal reveal-delay-1 ${
            visible ? "visible" : ""
          }`}
        >
          Thailand’s Oldest Soy Sauce Manufacturer • Est. 1912
          <br />
          Premium Quality. Naturally Brewed. Authentic Flavor.
        </p>

        <a
          href="#process"
          className={`inline-block px-8 py-3 border border-[var(--heritage-gold)] text-[var(--heritage-gold)] uppercase tracking-widest text-sm transition hover:bg-[var(--heritage-gold)] hover:text-yellow-200 reveal reveal-delay-2 ${
            visible ? "visible" : ""
          }`}
        >
          Discover Our Process
        </a>
      </div>
    </section>
  );
}