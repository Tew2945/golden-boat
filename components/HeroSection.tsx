export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[url('/images/hero.jpg')] bg-cover bg-center text-white text-center px-6"
    >
      <div className="bg-black/60 p-10 rounded-xl">
        <h1 className="text-5xl font-bold mb-6">
          Authentic Flavor Since 1912
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Four generations of craftsmanship delivering premium soy sauce
          trusted worldwide.
        </p>
      </div>
    </section>
  );
}