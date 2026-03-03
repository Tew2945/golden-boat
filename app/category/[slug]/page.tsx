import { categories } from "@/data/categories";
import { notFound } from "next/navigation";
type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(
    (c) => c.slug === params.slug
  );

  if (!category) return notFound();

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">
        {category.name}
      </h1>

      <p>Here will be list of products in this category.</p>
    </section>
  );
}