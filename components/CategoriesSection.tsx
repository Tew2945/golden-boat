"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { useReveal } from "@/hooks/useReveal";

export default function CategoriesSection() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      id="categories"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60" />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className={`mb-16 reveal ${visible ? "visible" : ""}`}>
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-medium">
            Explore our range
          </p>

          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/60" />
            <div className="w-1 h-1 rounded-full bg-[var(--heritage-gold)]/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/60" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wider">
            Product Categories
          </h2>

          {/* Ornamental bottom */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--heritage-gold)]/60" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/40" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link
              key={cat.categorySlug}
              href={`/category/${cat.categorySlug}`}
              className={`group relative flex flex-col justify-between min-h-[160px]
                bg-white/5 backdrop-blur-md rounded-2xl p-8
                border border-white/10
                hover:border-[var(--heritage-gold)]/40
                hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-[var(--heritage-gold)]
                transition-all duration-500 overflow-hidden reveal ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Sweep fill */}
              <div className="absolute inset-0 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl" />

              {/* Watermark number */}
              <span className="absolute top-3 right-4 text-[56px] font-bold leading-none text-white/5 group-hover:text-gray-100/30 select-none transition-all duration-300 group-hover:scale-110 origin-top-right">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Category count label */}
              <span className="relative z-10 text-[9px] uppercase tracking-[0.3em] text-white/25 group-hover:text-gray-400 transition-colors duration-300 text-left">
                {String(index + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
              </span>

              {/* Name */}
              <div className="relative z-10 mt-3">
                <h3 className="text-white font-serif text-2xl tracking-wide text-left group-hover:text-gray-800 transition-colors duration-300">
                  {cat.name}
                </h3>
              </div>

              {/* Bottom CTA */}
              <div className="relative z-10 mt-6 flex items-center justify-between">
                <div className="h-px w-0 group-hover:w-full bg-[var(--heritage-gold)] transition-all duration-500" />
                <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 group-hover:text-[var(--heritage-gold)] flex items-center gap-1.5 transition-all duration-300 shrink-0 ml-4">
                  View More
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}