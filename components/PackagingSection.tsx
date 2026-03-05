"use client";
import { useReveal } from "@/hooks/useReveal";

export default function PackagingSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 text-center overflow-hidden"
    >
      {/* background image */}
      {/* <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" /> */}

      {/* dark overlay */}
      {/* <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" /> */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        <h2
          className={`text-3xl md:text-5xl font-serif text-white mb-12 reveal ${
            visible ? "visible" : ""
          }`}
        >
          Packaging Specification
        </h2>

        <img
          src="/images/packaging.jpg"
          className={`mx-auto rounded-xl shadow-2xl reveal ${
            visible ? "visible" : ""
          }`}
        />

      </div>
    </section>
  );
}