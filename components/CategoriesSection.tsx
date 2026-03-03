import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">
          Product Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="border rounded-xl p-10 hover:shadow-lg transition"
            >
              <h3 className="font-semibold">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}