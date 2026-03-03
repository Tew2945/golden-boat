"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Are your products naturally brewed?",
    a: "Yes, we use traditional natural fermentation methods."
  },
  {
    q: "Do you offer OEM services?",
    a: "Yes, we provide flexible OEM services to select partners."
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          FAQ
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="font-semibold text-left w-full"
            >
              {faq.q}
            </button>

            {open === index && (
              <p className="mt-3 text-gray-600">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}