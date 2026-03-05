import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find(
    (c) => c.categorySlug === slug
  );

  if (!category) return notFound();

  const filteredProducts = products.filter(
    (product) => product.categorySlug === slug
  );

  return (
    <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-serif text-center text-white tracking-wider mb-16">
          {category.name}
        </h1>

        {/* Product Grid */}
        <div className="grid 
          grid-cols-1 
          sm:grid-cols-2
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 md:gap-10"
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group bg-white/95 backdrop-blur rounded-xl p-5 
              hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-40 md:h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 text-sm md:text-base font-semibold text-center group-hover:text-[var(--heritage-gold)] transition">
                {product.name}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 text-center mt-1">
                {product.name_th}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}