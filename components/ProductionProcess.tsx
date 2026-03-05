"use client";

import { steps } from "@/data/process";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function ProductionProcess() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="process" ref={ref} className="relative">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 py-20">

        {/* Header */}
        <div className={`mb-16 reveal ${visible ? "visible" : ""}`}>
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-medium">
            How it works
          </p>

          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/60" />
            <div className="w-1 h-1 rounded-full bg-[var(--heritage-gold)]/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/60" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wider">
            Production Process
          </h2>

          {/* Ornamental bottom */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--heritage-gold)]/60" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/40" />
          </div>
        </div>

        {/* Connector line */}
        <div className="hidden lg:block relative mb-0">
          <div
            className={`absolute top-[88px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-transparent via-[var(--heritage-gold)]/30 to-transparent transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative reveal ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Step bubble */}
              <div className="relative z-10 flex justify-center mb-[-20px]">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-[var(--heritage-gold)]/30 text-white text-sm font-serif flex items-center justify-center shadow-lg group-hover:bg-[var(--heritage-gold)] group-hover:border-[var(--heritage-gold)] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group-hover:border-[var(--heritage-gold)]/40 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500">

                {/* Sweep fill */}
                <div className="absolute inset-0 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl z-0" />

                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden z-10">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-30 transition-opacity duration-300" />

                  {/* Step label over image */}
                  <div className="absolute bottom-3 left-4 z-10">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10 p-5 text-left">
                  <h3 className="font-serif text-white text-lg leading-snug group-hover:text-gray-800 transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>

                {/* Bottom gold bar */}
                <div className="relative z-10 h-px w-0 group-hover:w-full bg-gradient-to-r from-[var(--heritage-gold)] to-[var(--heritage-gold)]/30 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}