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

  {
    slug: "mushroom-soy-sauce",
    name: "MUSHROOM SOY SAUCE",
    name_th: "ซีอิ๊วขาวเห็ดหอม",
    categorySlug: "cooking-sauce",
    image: "/images/products/mushroom-soy-sauce.jpg",
    sizes: [200, 700],
    usage:
      "Ideal for stir frying vegetables, meat, poultry and seafood dishes. The mild natural mushroom flavour makes it particularly delicious for steamed dishes, delivering a rich savoury taste. Also excellent as a marinade.",
    checklist: [
      "Marination",
      "Seasoning",
      "Stir Fry",
      "Steaming",
    ],
  },

  {
    slug: "multigrain-soy-sauce",
    name: "MULTIGRAIN SOY SAUCE",
    name_th: "ซีอิ๊วขาวธัญพืช",
    categorySlug: "cooking-sauce",
    image: "/images/products/multigrain-soy-sauce.jpg",
    sizes: [200, 700],
    usage:
      "Multigrain naturally brewed soy sauce (gluten free) that instantly improves and enriches the flavour and taste of soups, stir fries, marinades, stews and steamed dishes. Also excellent as a dip.",
    checklist: [
      "Marination",
      "Seasoning",
      "Steaming",
      "Stir Fry",
      "Dipping",
    ],
  },
  {
    slug: "less-sodium-47-soy-sauce",
    name: "LESS SODIUM 47% SOY SAUCE",
    name_th: "ซีอิ๊วสูตรลดเกลือ",
    categorySlug: "cooking-sauce",
    image: "/images/products/less-sodium-47-soy-sauce.jpg",
    sizes: [200, 700],
    usage:
      "Less sodium naturally brewed soy sauce that improves and enriches the flavour and taste of soups, stir fries, marinades, stews and steamed dishes. Also excellent as a dip.",
    checklist: [
      "Marination",
      "Seasoning",
      "Steaming",
      "Stir Fry",
      "Dipping",
    ],
  },
  {
    slug: "supreme-dark-soy-sauce",
    name: "SUPREME DARK SOY SAUCE",
    name_th: "ซีอิ๊วดำสูตร 1",
    categorySlug: "cooking-sauce",
    image: "/images/products/supreme-dark-soy-sauce.jpg",
    sizes: [200, 300, 700],
    usage:
      "Naturally brewed dark soy sauce that enhances flavour, aroma and colour. Perfect for fried noodles, roasted duck, chicken, pork belly, fish maw soup, hot and sour soup, and stewed dishes.",
    checklist: [
      "Marination",
      "Seasoning",
      "Stir Fry",
      "Enhance Appearance",
    ],
  },
  {
    slug: "sweet-soy-sauce",
    name: "SWEET SOY SAUCE",
    name_th: "ซีอิ๊วหวาน",
    categorySlug: "cooking-sauce",
    image: "/images/products/sweet-soy-sauce.jpg",
    sizes: [200, 300, 700, 1950],
    usage:
      "Enriched sweetened soy sauce with incredible flavour and taste. Perfect for stir frying, marinating and dipping. Its rich golden brown colour enhances texture and intensity in dishes.",
    checklist: [
      "Marination",
      "Seasoning",
      "Enhance Appearance",
      "Stir Fry",
      "Dipping",
    ],
  },
  {
    slug: "all-purpose-seasoning-sauce",
    name: "ALL-PURPOSE SEASONING SAUCE",
    name_th: "ซอสปรุงรสฉลากเขียว",
    categorySlug: "cooking-sauce",
    image: "/images/products/all-purpose-seasoning-sauce.jpg",
    sizes: [200, 300, 700, 4300],
    usage:
      "Ideal for stir frying vegetables, meat, poultry and seafood. Delivers a rich, delicious savoury flavour and aroma. Also excellent as a marinade.",
    checklist: [
      "Marination",
      "Seasoning",
      "Stir Fry",
      "Dipping",
    ],
  },
  {
    slug: "supreme-fermented-soybean",
    name: "SUPREME FERMENTED SOYBEAN",
    name_th: "เต้าเจี้ยวสูตร 1",
    categorySlug: "cooking-sauce",
    image: "/images/products/supreme-fermented-soybean.jpg",
    sizes: [300, 700],
    usage:
      "Made from whole soybeans with enriched flavour and a unique taste. Particularly delicious with stir fried vegetables, chicken, duck and as a marinade.",
    checklist: [
      "Marination",
      "Seasoning",
      "Steaming",
      "Stir Fry",
      "Dipping",
    ],
  },
  {
    slug: "oyster-sauce",
    name: "OYSTER SAUCE",
    name_th: "ซอสหอย",
    categorySlug: "cooking-sauce",
    image: "/images/products/oyster-sauce.jpg",
    sizes: [300, 700],
    usage:
      "Rich, concentrated savoury sauce bursting with flavour. Perfect for marinating and stir frying. Excellent with white and red meats as well as seafood dishes.",
    checklist: [
      "Marination",
      "Seasoning",
      "Stir Fry",
      "Glazing",
    ],
  },
  {
    slug: "vegetarian-mushroom-sauce",
    name: "VEGETARIAN MUSHROOM SAUCE",
    name_th: "ซอสเห็ดหอม",
    categorySlug: "cooking-sauce",
    image: "/images/products/vegetarian-mushroom-sauce.jpg",
    sizes: [200, 300, 700],
    usage:
      "Rich, concentrated savoury sauce with mild mushroom flavour. Perfect for vegetarian dishes and stir fried vegetables. Made with high quality ingredients.",
    checklist: [
      "Marination",
      "Seasoning",
      "Stir Fry",
      "Glazing",
    ],
  },
  {
    slug: "murasaki-japanese-soy-sauce",
    name: "MURASAKI JAPANESE SOY SAUCE",
    name_th: "ซีอิ๊วญี่ปุ่นมูราซากิ",
    categorySlug: "cooking-sauce",
    image: "/images/products/murasaki-japanese-soy-sauce.jpg",
    sizes: [200, 1000],
    usage:
      "Naturally brewed Koikuchi shoyu, an excellent all-purpose Japanese soy sauce that improves and enriches flavour in marinades, gravies, braising liquids and stir fries. Perfect for both cooking and seasoning.",
    checklist: [
      "Marination",
      "Seasoning",
      "Steaming",
      "Stir Fry",
      "Dipping",
    ],
  },

  {
    slug: "hoisin-sauce",
    name: "HOISIN SAUCE",
    name_th: "",
    categorySlug: "cooking-marinade-sauce",
    image: "/images/products/hoisin-sauce.jpg",
    sizes: [320],
    usage:
      "A rich blend with salty, sweet and umami flavour. Perfect for marinating grilled meats. Developed especially for marinating, glazing and stir frying.",
    checklist: [
      "Marination",
      "Seasoning",
      "Enhance Appearance",
      "Stir Fry",
      "Glazing",
    ],
  },
  {
    slug: "bbq-char-siew-marinade-sauce",
    name: "BBQ CHAR SIEW MARINATE SAUCE",
    name_th: "ซอสหมักหมูแดงสไตล์ฮ่องกง",
    categorySlug: "cooking-marinade-sauce",
    image: "/images/products/bbq-char-siew-marinade-sauce.jpg",
    sizes: [200],
    usage:
      "Perfect for marinating and glazing grilled meats with a rich, flavourful texture.",
    checklist: [
      "Marination",
      "Seasoning",
      "Glazing",
    ],
  },
  {
    slug: "teriyaki-marinade-sauce",
    name: "TERIYAKI MARINATE SAUCE",
    name_th: "ซอสหมักเทอริยากิ",
    categorySlug: "cooking-marinade-sauce",
    image: "/images/products/teriyaki-marinade-sauce.jpg",
    sizes: [200, 700],
    usage:
      "Perfect for marinating and glazing grilled meats or seafood. Developed especially to deliver a rich and flavourful finish.",
    checklist: [
      "Marination",
      "Glazing",
    ],
  },
  {
    slug: "vegan-shrimp-paste-kapi-j",
    name: "VEGAN SHRIMP PASTE (KAPI J)",
    name_th: "กะปิเจ",
    categorySlug: "cooking-marinade-sauce",
    image: "/images/products/vegan-shrimp-paste-kapi-j.jpg",
    sizes: [110, 320],
    usage:
      "A vegan version of traditional Thai shrimp paste (Kapi). Suitable for salads, dips, soups, stir fries and curries. Salty, pungent and full of deep umami richness.",
    checklist: [
      "Marination",
      "Seasoning",
    ],
  },
  {
    slug: "premium-light-soy-sauce",
    name: "PREMIUM LIGHT SOY SAUCE",
    name_th: "ซีอิ๊วเรือทอง",
    categorySlug: "dipping-sauce",
    image: "/images/products/premium-light-soy-sauce.jpg",
    sizes: [200],
    usage:
      "Naturally brewed soy sauce that enhances flavour and taste. Excellent as a dipping and seasoning sauce.",
    checklist: [
      "Dipping",
      "Seasoning",
    ],
  },
  {
    slug: "dashi-soy-sauce",
    name: "DASHI SOY SAUCE",
    name_th: "ซีอิ๊วดาซิ",
    categorySlug: "dipping-sauce",
    image: "/images/products/dashi-soy-sauce.jpg",
    sizes: [200],
    usage:
      "Rich Japanese soy sauce made with authentic ingredients. Perfect as a table sauce or dip. Ideal for sukiyaki (1:3 mix) and shabu (1:4 mix).",
    checklist: [
      "Dipping",
      "Sukiyaki",
    ],
  },
  {
    slug: "shoyu",
    name: "SHOYU",
    name_th: "",
    categorySlug: "dipping-sauce",
    image: "/images/products/shoyu.jpg",
    sizes: [200],
    usage:
      "Rich Japanese soy sauce made with authentic natural ingredients. Perfect as a table sauce or dipping sauce.",
    checklist: [
      "Dipping",
    ],
  },
  {
    slug: "sweetened-chilli-sauce",
    name: "SWEETENED CHILLI SAUCE",
    name_th: "น้ำจิ้มไก่",
    categorySlug: "dipping-sauce",
    image: "/images/products/sweetened-chilli-sauce.jpg",
    sizes: [200, 300, 700],
    usage:
      "A blend of fresh chilli, sugar and garlic delivering a sweet and spicy flavour. Excellent dipping sauce for fried chicken, seafood and snacks.",
    checklist: [
      "Dipping",
    ],
  },
  {
    slug: "chili-sauce",
    name: "CHILI SAUCE",
    name_th: "ซอสพริก",
    categorySlug: "dipping-sauce",
    image: "/images/products/chili-sauce.jpg",
    sizes: [200],
    usage:
      "A versatile chili sauce that enhances flavour and taste. Excellent as a dipping sauce.",
    checklist: [
      "Dipping",
    ],
  },
  {
    slug: "sriracha-chili-sauce",
    name: "SRIRACHA CHILI SAUCE",
    name_th: "ซอสพริกศรีราชา",
    categorySlug: "dipping-sauce",
    image: "/images/products/sriracha-chili-sauce.jpg",
    sizes: [200],
    usage:
      "Intense and bold chili flavour. Suitable for dipping with savoury dishes.",
    checklist: [
      "Dipping",
    ],
  },
  {
    slug: "soy-sauce-with-chilli",
    name: "SOY SAUCE WITH CHILLI",
    name_th: "ซีอิ๊วพริก",
    categorySlug: "dipping-sauce",
    image: "/images/products/soy-sauce-with-chilli.jpg",
    sizes: [200],
    usage:
      "A unique blend of soy sauce and fresh chilli, creating the perfect table sauce for dipping. Excellent with poultry, meat, vegetables and seafood.",
    checklist: [
      "Dipping",
    ],
  },
  {
    slug: "jaew-spicy-sauce",
    name: "JAEW SPICY SAUCE",
    name_th: "ซอสจิ้มแจ่ว",
    categorySlug: "dipping-sauce",
    image: "/images/products/jaew-spicy-sauce.jpg",
    sizes: [200],
    usage:
      "Spicy and intense Thai-style sauce. Perfect for dipping grilled meats and poultry.",
    checklist: [
      "Dipping",
    ],
  },
  {
    slug: "seafood-dipping-sauce",
    name: "SEAFOOD DIPPING SAUCE",
    name_th: "น้ำจิ้มซีฟู้ด",
    categorySlug: "dipping-sauce",
    image: "/images/products/seafood-dipping-sauce.jpg",
    sizes: [200],
    usage:
      "The perfect dipping sauce for all types of seafood, made with fresh lime, chilli, coriander and garlic.",
    checklist: [
      "Dipping",
    ],
  },
  {
    slug: "teriyaki-sauce",
    name: "TERIYAKI SAUCE",
    name_th: "ซอสเทริยากิ",
    categorySlug: "dipping-sauce",
    image: "/images/products/teriyaki-sauce.jpg",
    sizes: [200],
    usage:
      "Perfect for glazing pan-fried or grilled seafood, poultry and meat. Developed to deliver a rich and flavourful finish.",
    checklist: [
      "Glazing",
      "Dipping",
    ],
  },
  {
    slug: "miso-bbq-sauce",
    name: "MISO BBQ SAUCE",
    name_th: "ซอสมิโซบาร์บีคิว",
    categorySlug: "dipping-sauce",
    image: "/images/products/miso-bbq-sauce.jpg",
    sizes: [200],
    usage:
      "Unique Japanese BBQ sauce with rich, thick texture. Perfect for dipping and glazing grilled meats, pork or chicken steak.",
    checklist: [
      "Glazing",
      "Dipping",
    ],
  },
  {
    slug: "plum-sauce",
    name: "PLUM SAUCE",
    name_th: "น้ำจิ้มบ๊วย",
    categorySlug: "dipping-sauce",
    image: "/images/products/plum-sauce.jpg",
    sizes: [200],
    usage:
      "Light brown sweet and sour sauce. Perfect as a dip for deep-fried foods such as spring rolls, shrimp cakes and fries. Can also be used as a base for plum beverages.",
    checklist: [
      "Dipping",
    ],
  },
  {
    slug: "chicken-rice-sauce",
    name: "CHICKEN RICE SAUCE",
    name_th: "น้ำจิ้มข้าวมันไก่",
    categorySlug: "dipping-sauce",
    image: "/images/products/chicken-rice-sauce.jpg",
    sizes: [200],
    usage:
      "A delicious Thai-style dipping sauce for chicken rice or steamed fish, with a slight spicy kick.",
    checklist: [
      "Dipping",
      "Seasoning",
    ],
  },
];