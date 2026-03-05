"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { faqs } from "@/data/faq";


export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60 z-10" />


      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">

        <h2
          className={`text-3xl md:text-5xl font-serif text-center mb-16 reveal ${visible ? "visible" : ""
            }`}
        >
          FAQ
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur rounded-xl p-6 shadow-md reveal ${visible ? "visible" : ""
                }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="font-semibold text-left w-full text-gray-800 flex justify-between items-center"
              >
                {faq.q}

                <span className="text-[var(--heritage-gold)] text-xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}