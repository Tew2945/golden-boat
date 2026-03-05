import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <section className="relative min-h-screen pt-32 pb-24 px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          href={`/category/${product.categorySlug}`}
          className="text-white hover:text-[var(--heritage-gold)] transition"
        >
          ← Back
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-10 items-center">

          {/* Product Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="text-white">

            <h1 className="text-3xl md:text-4xl font-serif tracking-wide">
              {product.name}
            </h1>

            <p className="text-lg text-gray-300 mt-2">
              {product.name_th}
            </p>

            {/* Sizes */}
            <div className="mt-6">
              <h3 className="text-sm uppercase tracking-widest text-gray-400">
                Available Sizes
              </h3>

              <div className="flex flex-wrap gap-3 mt-3">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 border border-white/30 rounded-lg text-sm"
                  >
                    {size} ml
                  </span>
                ))}
              </div>
            </div>

            {/* Usage */}
            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-widest text-gray-400">
                Usage
              </h3>

              <p className="mt-3 text-gray-200 leading-relaxed">
                {product.usage}
              </p>
            </div>

            {/* Checklist */}
            <div className="mt-8">
              <h3 className="text-sm uppercase tracking-widest text-gray-400">
                Best For
              </h3>

              <ul className="mt-3 space-y-2">
                {product.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    ✓ {item}
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