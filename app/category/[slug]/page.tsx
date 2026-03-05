import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type CategoryPageProps = {
  params: { slug: string };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find((c) => c.categorySlug === slug);
  if (!category) return notFound();

  const filteredProducts = products.filter((p) => p.categorySlug === slug);

  const currentIndex = categories.findIndex((c) => c.categorySlug === slug);
  const prevCategory = currentIndex > 0 ? categories[currentIndex - 1] : null;
  const nextCategory = currentIndex < categories.length - 1 ? categories[currentIndex + 1] : null;

  return (
    <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Subtle vignette corners */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Back */}
        <Link
          href="/#categories"
          className="mb-12 inline-flex items-center gap-2 text-white/50 hover:text-[var(--heritage-gold)] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          <span className="text-base leading-none">←</span> Back to Categories
        </Link>

        {/* Category Nav — ornamental style */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-6">
          {prevCategory ? (
            <Link
              href={`/category/${prevCategory.categorySlug}`}
              className="group flex flex-col items-center gap-1 text-white/30 hover:text-[var(--heritage-gold)] transition-colors duration-300"
            >
              <span className="text-3xl leading-none">‹</span>
            </Link>
          ) : <div className="w-8" />}

          <div className="text-center">
            {/* Ornamental line above */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/60" />
              <div className="w-1 h-1 rounded-full bg-[var(--heritage-gold)]/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/60" />
            </div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-2">
              Category {String(currentIndex + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
            </p>
            <h1 className="text-3xl md:text-5xl font-serif text-white tracking-wider">
              {category.name}
            </h1>

            {/* Ornamental line below */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--heritage-gold)]/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[var(--heritage-gold)]/60" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--heritage-gold)]/40" />
            </div>
          </div>

          {nextCategory ? (
            <Link
              href={`/category/${nextCategory.categorySlug}`}
              className="group flex flex-col items-center gap-1 text-white/30 hover:text-[var(--heritage-gold)] transition-colors duration-300"
            >
              <span className="text-3xl leading-none">›</span>

            </Link>
          ) : <div className="w-8" />}
        </div>

        {/* Product count */}
        <p className="text-center text-white/25 text-xs tracking-[0.25em] uppercase mb-14">
          {filteredProducts.length} Products
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group relative flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--heritage-gold)]/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              {/* Sweep fill on hover */}
              <div className="absolute inset-0 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl" />

              {/* Index watermark */}
              <span className="absolute top-3 right-4 text-[42px] font-bold leading-none text-white/5 group-hover:text-gray-100/30 select-none transition-all duration-300 z-10">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Image */}
              <div className="relative w-full h-44 md:h-52 p-4 z-10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Divider */}
              <div className="relative z-10 mx-5">
                <div className="h-px bg-white/10 group-hover:bg-gray-200 transition-colors duration-300" />
              </div>

              {/* Text */}
              <div className="relative z-10 p-5 text-center">
                <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-gray-800 transition-colors duration-300 leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-white/40 group-hover:text-gray-400 transition-colors duration-300 mt-1">
                  {product.name_th}
                </p>

                {/* CTA */}
                <span className="mt-4 inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-transparent group-hover:text-[var(--heritage-gold)] transition-all duration-300">
                  View Details
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