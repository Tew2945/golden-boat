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
      {/* Background */}
      <div className="absolute inset-0 bg-black/60" />
      

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        <h2
          className={`text-3xl md:text-5xl font-serif text-white mb-16 tracking-wider reveal ${
            visible ? "visible" : ""
          }`}
        >
          Product Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {categories.map((cat, index) => (
            <Link
              key={cat.categorySlug}
              href={`/category/${cat.categorySlug}`}
              className={`group bg-white/85 backdrop-blur-sm rounded-xl p-10
              border border-white/20 shadow-md
              hover:bg-white hover:shadow-2xl hover:-translate-y-1
              transition-all duration-300 reveal ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3
                className="text-gray-800 font-semibold text-lg tracking-wide
                group-hover:text-[var(--heritage-gold)] transition-colors"
              >
                {cat.name}
              </h3>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}