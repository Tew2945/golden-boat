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
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">
        {category.name}
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="mx-auto object-contain"
            />

            <h3 className="mt-6 font-semibold text-center">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 text-center mt-2">
              {product.name_th}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}