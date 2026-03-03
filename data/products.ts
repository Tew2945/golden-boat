export type Product = {
  slug: string;
  name: string;
  name_th: string;
  categorySlug: string;
  image: string;
  sizes: number[];
  usage: string;
  checklist: string[];
};

export const products: Product[] = [
  {
    slug: "supreme-light-soy-sauce",
    name: "SUPREME LIGHT SOY SAUCE",
    name_th: "ซีอิ๊วขาวสูตร 1",
    categorySlug: "cooking-sauce",
    image: "/images/products/supreme-light-soy-sauce.jpg",
    sizes: [200, 300, 700, 1950, 4300],
    usage:
      "Naturally brewed soy sauce that instantly improves and enriches the flavour and taste for soups, stir frying, marinating, stewing and steaming. Also excellent as a dip.",
    checklist: [
      "Marination",
      "Seasoning",
      "Steaming",
      "Stir Fry",
      "Dipping",
    ],
  },
];