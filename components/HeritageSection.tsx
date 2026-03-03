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
      <div
        ref={introRef}
        className="relative min-h-[80vh] flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl text-center px-6">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 tracking-wide reveal ${
              introVisible ? "visible" : ""
            }`}
          >
            Our Heritage
          </h2>

          <p
            className={`text-lg md:text-xl leading-relaxed text-gray-200 reveal reveal-delay-1 ${
              introVisible ? "visible" : ""
            }`}
          >
            Nguan Chiang is a leading producer of premium soy sauce,
            delivering rich, authentic flavors to chefs, food-service
            professionals, and consumers worldwide.
          </p>
        </div>
      </div>

      {/* ================= HISTORY SECTION ================= */}
      <div ref={historyRef} className="py-20 relative">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-gray-200">

          {/* Text */}
          <div
            className={`reveal ${
              historyVisible ? "visible" : ""
            }`}
          >
            <h3 className="text-3xl font-bold mb-6">
              Founded in 1912
            </h3>

            <p className="mb-4 leading-relaxed">
              Founded in 1912 by our great-grandfather Mr. Luk,
              Nguan Chiang began as a Chinatown trading house
              importing fine foods from Guangzhou, including soy sauce
              from the family’s small factory.
            </p>

            <p className="mb-4 leading-relaxed">
              As soy sauce quickly became the best-selling product,
              we established our first brewery in Thailand.
              Four generations later, we continue to honor
              traditional natural brewing methods while meeting
              modern global standards.
            </p>
          </div>

          {/* Image */}
          <div
            className={`reveal reveal-delay-1 ${
              historyVisible ? "visible" : ""
            }`}
          >
            <img
              src="/images/heritage/600px-1958-yaowarat-road-bangkok-AA_03.jpg"
              alt="Founder Mr. Luk"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* ================= MARKET POSITION ================= */}
      <div ref={marketRef} className="py-20 relative">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-gray-200">

          {/* Image */}
          <div
            className={`reveal ${
              marketVisible ? "visible" : ""
            }`}
          >
            <img
              src="/images/heritage/CF -PL10 ลานโอ่งหมักซีอิ้ว ก่อน 1990 .jpg"
              alt="Brewery"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          {/* Text */}
          <div
            className={`reveal reveal-delay-1 ${
              marketVisible ? "visible" : ""
            }`}
          >
            <h3 className="text-3xl font-bold mb-6">
              Positioned for Global Growth
            </h3>

            <p className="mb-4 leading-relaxed">
              Worldwide demand for soy sauce is rising with the popularity
              of Asian cuisine and naturally fermented foods.
              Golden Boat is well positioned to capture this growth,
              offering premium products that resonate with discerning
              consumers around the globe.
            </p>

            <p className="leading-relaxed">
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-gray-200 text-center">

          <img
            src="/images/heritage/CF- PL7 บรรจุภัณฑ์ซีอิ้วสำหรับส่งลูกค้า 1 .jpg"
            alt="Golden Boat Brand"
            className={`rounded-2xl shadow-xl mx-auto mb-10 w-full md:w-2/3 object-cover reveal ${
              philosophyVisible ? "visible" : ""
            }`}
          />

          <h3
            className={`text-3xl md:text-4xl font-bold mb-6 reveal reveal-delay-1 ${
              philosophyVisible ? "visible" : ""
            }`}
          >
            Tradition Meets Innovation
          </h3>

          <p
            className={`text-lg leading-relaxed mb-6 reveal reveal-delay-2 ${
              philosophyVisible ? "visible" : ""
            }`}
          >
            Every bottle reflects our passion for flavor,
            food safety, and sustainability.
            We balance heritage and innovation—
            preserving the original taste that defines us
            while creating new sauces to meet evolving palates.
          </p>

          <p
            className={`text-xl font-semibold tracking-wide reveal reveal-delay-3 ${
              philosophyVisible ? "visible" : ""
            }`}
          >
            Four generations. One enduring promise:
            authentic flavor, trusted worldwide.
          </p>
        </div>
      </div>

    </section>
  );
}