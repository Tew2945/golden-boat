"use client";
import { useReveal } from "@/hooks/useReveal";

export default function HeritageSection() {
  const { ref: introRef, visible: introVisible } = useReveal();
  const { ref: historyRef, visible: historyVisible } = useReveal(0.2);
  const { ref: marketRef, visible: marketVisible } = useReveal(0.2);
  const { ref: philosophyRef, visible: philosophyVisible } = useReveal(0.2);

  return (
    <section id="heritage" className="w-full text-gray-900">

      {/* ================= HERO INTRO ================= */}
      <div ref={introRef} className="relative min-h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl text-center px-6">
          <p className={`text-xs uppercase tracking-[0.3em] text-white/30 mb-4 reveal ${introVisible ? "visible" : ""}`}>
            Since 1912
          </p>

          {/* Ornamental top */}
          <div className={`flex items-center justify-center gap-3 mb-5 reveal ${introVisible ? "visible" : ""}`}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/60" />
            <div className="w-1 h-1 rounded-full bg-[var(--heritage-gold)]/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/60" />
          </div>

          <h2 className={`text-4xl md:text-6xl font-serif mb-6 tracking-wide reveal ${introVisible ? "visible" : ""}`}>
            Our Heritage
          </h2>

          {/* Ornamental bottom */}
          <div className={`flex items-center justify-center gap-3 mb-6 reveal ${introVisible ? "visible" : ""}`}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--heritage-gold)]/60" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/40" />
          </div>

          <p className={`text-lg md:text-xl leading-relaxed text-white/70 reveal reveal-delay-1 ${introVisible ? "visible" : ""}`}>
            Nguan Chiang is a leading producer of premium soy sauce,
            delivering rich, authentic flavors to chefs, food-service
            professionals, and consumers worldwide.
          </p>
        </div>
      </div>

      {/* ================= HISTORY SECTION ================= */}
      <div ref={historyRef} className="py-20 relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 pointer-events-none"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center text-gray-200">

          {/* Text */}
          <div className={`reveal ${historyVisible ? "visible" : ""}`}>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mb-4">Our Story</p>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/60" />
              <div className="w-1 h-1 rounded-full bg-[var(--heritage-gold)]/60" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/60" />
            </div>

            <h3 className="text-3xl font-serif mb-2 text-white tracking-wide">
              Founded in 1912
            </h3>

            <div className="flex items-center gap-3 mt-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[var(--heritage-gold)]/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/40" />
            </div>

            <p className="mb-4 leading-relaxed text-white/70 text-sm">
              Founded in 1912 by our great-grandfather Mr. Luk,
              Nguan Chiang began as a Chinatown trading house
              importing fine foods from Guangzhou, including soy sauce
              from the family's small factory.
            </p>
            <p className="leading-relaxed text-white/70 text-sm">
              As soy sauce quickly became the best-selling product,
              we established our first brewery in Thailand.
              Four generations later, we continue to honor
              traditional natural brewing methods while meeting
              modern global standards.
            </p>
          </div>

          {/* Image */}
          <div className={`reveal reveal-delay-1 ${historyVisible ? "visible" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              <img
                src="/images/heritage/600px-1958-yaowarat-road-bangkok-AA_03.jpg"
                alt="Founder Mr. Luk"
                className="w-full object-cover"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-[var(--heritage-gold)]/20 pointer-events-none" />
              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">Yaowarat Road, Bangkok — 1958</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MARKET POSITION ================= */}
      <div ref={marketRef} className="py-20 relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 pointer-events-none"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center text-gray-200">

          {/* Image */}
          <div className={`reveal ${marketVisible ? "visible" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              <img
                src="/images/heritage/CF -PL10 ลานโอ่งหมักซีอิ้ว ก่อน 1990 .jpg"
                alt="Brewery"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-[var(--heritage-gold)]/20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">Fermentation Yard — Before 1990</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`reveal reveal-delay-1 ${marketVisible ? "visible" : ""}`}>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mb-4">Market Position</p>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/60" />
              <div className="w-1 h-1 rounded-full bg-[var(--heritage-gold)]/60" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/60" />
            </div>

            <h3 className="text-3xl font-serif mb-2 text-white tracking-wide">
              Positioned for Global Growth
            </h3>

            <div className="flex items-center gap-3 mt-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[var(--heritage-gold)]/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/40" />
            </div>

            <p className="mb-4 leading-relaxed text-white/70 text-sm">
              Worldwide demand for soy sauce is rising with the popularity
              of Asian cuisine and naturally fermented foods.
              Golden Boat is well positioned to capture this growth,
              offering premium products that resonate with discerning
              consumers around the globe.
            </p>
            <p className="leading-relaxed text-white/70 text-sm">
              Our strength lies in consistent quality and long-term
              partnerships across B2B, catering, and retail channels.
              We also provide flexible OEM services to select partners.
            </p>
          </div>

        </div>
      </div>

      {/* ================= BRAND PHILOSOPHY ================= */}
      <div ref={philosophyRef} className="py-24 relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-gray-200 text-center">

          {/* Image with gold frame */}
          <div className={`relative inline-block mb-12 reveal ${philosophyVisible ? "visible" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden mx-auto w-full md:w-2/3"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              <img
                src="/images/heritage/CF- PL7 บรรจุภัณฑ์ซีอิ้วสำหรับส่งลูกค้า 1 .jpg"
                alt="Golden Boat Brand"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-[var(--heritage-gold)]/25 pointer-events-none" />
            </div>
          </div>

          <p className={`text-[9px] uppercase tracking-[0.3em] text-white/25 mb-4 reveal reveal-delay-1 ${philosophyVisible ? "visible" : ""}`}>
            Our Philosophy
          </p>

          <div className={`flex items-center justify-center gap-3 mb-5 reveal reveal-delay-1 ${philosophyVisible ? "visible" : ""}`}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/60" />
            <div className="w-1 h-1 rounded-full bg-[var(--heritage-gold)]/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/60" />
          </div>

          <h3 className={`text-3xl md:text-4xl font-serif mb-2 text-white tracking-wide reveal reveal-delay-1 ${philosophyVisible ? "visible" : ""}`}>
            Tradition Meets Innovation
          </h3>

          <div className={`flex items-center justify-center gap-3 mt-4 mb-8 reveal reveal-delay-1 ${philosophyVisible ? "visible" : ""}`}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--heritage-gold)]/60" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/40" />
          </div>

          <p className={`text-base leading-relaxed mb-8 text-white/70 reveal reveal-delay-2 ${philosophyVisible ? "visible" : ""}`}>
            Every bottle reflects our passion for flavor,
            food safety, and sustainability.
            We balance heritage and innovation—
            preserving the original taste that defines us
            while creating new sauces to meet evolving palates.
          </p>

          {/* Closing quote */}
          <div className={`border border-[var(--heritage-gold)]/20 rounded-2xl px-8 py-6 bg-white/5 backdrop-blur-sm reveal reveal-delay-3 ${philosophyVisible ? "visible" : ""}`}>
            <p className="text-lg font-serif tracking-wide text-white/80 italic">
              "Four generations. One enduring promise:"
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--heritage-gold)]/80">
              Authentic flavor, trusted worldwide.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}