import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  params: { slug: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const categoryProducts = products.filter(
    (p) => p.categorySlug === product.categorySlug
  );
  const currentIndex = categoryProducts.findIndex((p) => p.slug === product.slug);
  const prevProduct = currentIndex > 0 ? categoryProducts[currentIndex - 1] : null;
  const nextProduct = currentIndex < categoryProducts.length - 1 ? categoryProducts[currentIndex + 1] : null;

  return (
    <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Back */}
        <Link
          href={`/category/${product.categorySlug}`}
          className="inline-flex items-center gap-2 text-white/50 hover:text-[var(--heritage-gold)] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          <span className="text-base leading-none">←</span> Back to Category
        </Link>

        <div className="grid md:grid-cols-2 gap-16 mt-12 items-center">

          {/* Image side */}
          <div className="relative flex items-center justify-center">

            {prevProduct && (
              <Link
                href={`/product/${prevProduct.slug}`}
                className="absolute left-0 md:-left-10 text-white/30 hover:text-[var(--heritage-gold)] text-3xl transition-colors duration-300 z-10"
              >‹</Link>
            )}

            {/* Image + shadow effect */}
            <div className="relative w-full flex items-center justify-center">

              {/* Glow blob behind image */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: "radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)" }}
              />

              {/* Actual image */}
              <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px]"
                style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.8)) drop-shadow(0 8px 24px rgba(0,0,0,0.6))" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Ground shadow ellipse */}
              <div
                className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-48 h-6 rounded-full blur-xl opacity-60"
                style={{ background: "rgba(0,0,0,0.7)" }}
              />
            </div>

            {nextProduct && (
              <Link
                href={`/product/${nextProduct.slug}`}
                className="absolute right-0 md:-right-10 text-white/30 hover:text-[var(--heritage-gold)] text-3xl transition-colors duration-300 z-10"
              >›</Link>
            )}

          </div>

          {/* Info side */}
          <div className="text-white">

            {/* Counter */}
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mb-4">
              {String(currentIndex + 1).padStart(2, "0")} / {String(categoryProducts.length).padStart(2, "0")}
            </p>

            {/* Ornamental top */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/60" />
              <div className="w-1 h-1 rounded-full bg-[var(--heritage-gold)]/60" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/60" />
            </div>

            <h1 className="text-3xl md:text-4xl font-serif tracking-wide leading-tight">
              {product.name}
            </h1>
            <p className="text-base text-white/40 mt-2 tracking-wider">
              {product.name_th}
            </p>

            {/* Ornamental bottom */}
            <div className="flex items-center gap-3 mt-5 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[var(--heritage-gold)]/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/40" />
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-3">
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-1.5 border border-white/15 bg-white/5 backdrop-blur-sm rounded-lg text-xs text-white/70 tracking-wider hover:border-[var(--heritage-gold)]/50 hover:text-[var(--heritage-gold)] transition-all duration-300"
                  >
                    {size} ml
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-8" />

            {/* Usage */}
            <div className="mb-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-3">
                Usage
              </p>
              <p className="text-white/70 leading-relaxed text-sm">
                {product.usage}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-8" />

            {/* Checklist */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-3">
                Best For
              </p>
              <ul className="space-y-2.5">
                {product.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="text-[var(--heritage-gold)] text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}