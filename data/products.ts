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
    image: "/images/products/01. ซีอิ๊วขาว สูตร1 1000.png",
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
    image: "/images/products/02. ซีอิ๊วขาวเห็ดหอม 1000.png",
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
    image: "/images/products/03. ซีอิ๊วขาวธัญพืช กลูเตนฟรี 1000.png",
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
    image: "/images/products/04. ซีอิ๊วลดเกลือ 200.png",
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
    image: "/images/products/05. ซีอิ๊วดำ สูตร1 1000.png",
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
    image: "/images/products/06. ซีอิ๊วหวาน 1000.png",
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
    image: "/images/products/07. ซอสปรุงรสฉลากเขียว (1).png",
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
    image: "/images/products/08. เต้าเจี๊ยว สูตร1 (1).png",
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
    image: "/images/products/09. ซอสหอยนางรม 1000.png",
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
    image: "/images/products/10. ซอสข้นเห็ดหอม (1).png",
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
    image: "/images/products/11. Japan Soy sauce (1).png",
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
    name_th: "ซอสฮอยซีน",
    categorySlug: "cooking-marinade-sauce",
    image: "/images/products/12. ฮอยซินซอส.png",
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
    image: "/images/products/13. ซอสหมักหมูแดงสไตล์ฮ่องกง.png",
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
    image: "/images/products/14. ซอสหมักเทอริยากิ.png",
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
    image: "/images/products/15. กระปิเจ.png",
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

  {
    slug: "japanese-soy-sauce-sesame-dressing",
    name: "JAPANESE SOY SAUCE WITH SESAME DRESSING",
    name_th: "น้ำสลัดซีอิ๊วญี่ปุ่นผสมงา",
    categorySlug: "salad-dressing",
    image: "/images/products/japanese-soy-sauce-sesame-dressing.jpg",
    sizes: [200],
    usage: "Refreshing soy sauce sesame dressing that pairs well with all types of salad and is also excellent with fish carpaccio.",
    checklist: [
      "Dressing"
    ],
  },
  {
    slug: "roasted-sesame-japanese-dressing-low-fat",
    name: "ROASTED SESAME JAPANESE DRESSING (LOW FAT)",
    name_th: "น้ำสลัดครีมงาคั่วสไตล์ญี่ปุ่น สูตรไขมันต่ำ",
    categorySlug: "salad-dressing",
    image: "/images/products/roasted-sesame-japanese-dressing-low-fat.jpg",
    sizes: [200],
    usage: "Roasted sesame Japanese salad dressing that delivers rich umami flavour and pairs well with all types of salads or fish carpaccio.",
    checklist: [
      "Dressing"
    ],
  },
  {
    slug: "coriander-pakchee-dressing",
    name: "CORIANDER (PAKCHEE) DRESSING",
    name_th: "น้ำสลัดผักชี",
    categorySlug: "salad-dressing",
    image: "/images/products/coriander-pakchee-dressing.jpg",
    sizes: [200],
    usage: "Creamy coriander dressing bursting with freshness. Perfect not only for salads but also for burritos, sandwiches, veggie wraps, grilled meats and fries.",
    checklist: [
      "Dressing"
    ],
  },
  {
    slug: "anchovy-salad-dressing",
    name: "ANCHOVY SALAD DRESSING",
    name_th: "น้ำสลัดแอนโชวี่",
    categorySlug: "salad-dressing",
    image: "/images/products/anchovy-salad-dressing.jpg",
    sizes: [200],
    usage: "Unique anchovy dressing blended with garlic and onion to create an extra umami flavour. A low-fat dressing perfect for all types of salads.",
    checklist: [
      "Dressing"
    ],
  },
  {
    slug: "yuzu-dressing-oil-free",
    name: "YUZU DRESSING (OIL FREE)",
    name_th: "น้ำสลัดยูซุ",
    categorySlug: "salad-dressing",
    image: "/images/products/yuzu-dressing-oil-free.jpg",
    sizes: [200],
    usage: "Oil-free yuzu dressing perfect for low-fat diets. Aromatic citrus fragrance with refreshing zesty flavour that brightens any dish.",
    checklist: [
      "Dressing"
    ],
  },
  {
    slug: "wasabi-dressing-oil-free",
    name: "WASABI DRESSING (OIL FREE)",
    name_th: "น้ำสลัดวาซาบิ",
    categorySlug: "salad-dressing",
    image: "/images/products/wasabi-dressing-oil-free.jpg",
    sizes: [200],
    usage: "Oil-free wasabi dressing delivering a natural wasabi punch. Perfect for wasabi lovers looking to add freshness and flavour to their meals.",
    checklist: [
      "Dressing"
    ],
  },
  {
    slug: "instant-thai-salad-dressing",
    name: "INSTANT THAI SALAD DRESSING",
    name_th: "น้ำยำสำเร็จรูป",
    categorySlug: "salad-dressing",
    image: "/images/products/instant-thai-salad-dressing.jpg",
    sizes: [200],
    usage: "Universal sauce for Thai salad dishes such as seafood salad, vermicelli salad and papaya salad. Simply add lime or lemon to adjust the flavour to your liking.",
    checklist: [
      "Dressing"
    ],
  },
  {
    slug: "sweet-sour-stir-fry-sauce",
    name: "Sweet & Sour Stir Fry Sauce",
    name_th: "ซอสผัดเปรี้ยวหวาน",
    categorySlug: "ready-sauce",
    image: "/products/ready-sauce/sweet-sour.jpg",
    sizes: [200],
    usage:
      "Simply add about 7 tablespoons (100g) of sauce to your dish and stir fry with deep-fried seafood, chicken, or pork in a wok. Add more sauce to taste.",
    checklist: ["Stir Fry"],
  },
  {
    slug: "tamarind-sauce",
    name: "Tamarind Sauce",
    name_th: "ซอสมะขาม",
    categorySlug: "ready-sauce",
    image: "/products/ready-sauce/tamarind.jpg",
    sizes: [200],
    usage:
      "Thai tamarind sauce with a sweet and sour flavor that pairs well with seafood, vegetables, and stir fry dishes. It can also be used as a glaze, dipping sauce, or even mixed into a refreshing tamarind drink.",
    checklist: ["Stir Fry", "Dipping"],
  },
  {
    slug: "steamed-fish-sauce",
    name: "Steamed Fish Sauce",
    name_th: "ซีอิ๊วนึ่งปลา",
    categorySlug: "ready-sauce",
    image: "/products/ready-sauce/steamed-fish.jpg",
    sizes: [200, 700],
    usage:
      "A simple sauce to prepare delicious steamed fish. Steam fish for 4–6 minutes with ginger and scallions. Heat a mix of steamed fish sauce and water (1:2 ratio) with oil, then pour over the fish and serve immediately.",
    checklist: ["Steaming", "Seasoning"],
  },
  {
    slug: "hot-spicy-hot-pot-soup",
    name: "Hot & Spicy Hot Pot Soup",
    name_th: "ซอสเย็นตาโฟหม้อไฟ",
    categorySlug: "ready-sauce",
    image: "/products/ready-sauce/hotpot.jpg",
    sizes: [200, 1950],
    usage:
      "A mouth-watering hot and spicy soup base. Mix sauce with water at a 1:3 ratio, bring to boil, then add pork, chicken, fish balls, and vegetables.",
    checklist: ["Soup Base"],
  },
  {
    slug: "vegan-mala-spicy-sauce",
    name: "Vegan Mala Spicy Sauce",
    name_th: "ซอสหม่าล่า",
    categorySlug: "ready-sauce",
    image: "/products/ready-sauce/mala.jpg",
    sizes: [110],
    usage:
      "Rich and spicy mala flavor. Perfect as a soup base (1:5 mixture with water), stir fry sauce, or universal spicy dipping sauce.",
    checklist: ["Soup Base", "Dipping", "Stir Fry"],
  },
  {
    slug: "chili-garlic-oil",
    name: "Chili Garlic Oil",
    name_th: "น้ำมันพริกกระเทียม",
    categorySlug: "ready-sauce",
    image: "/products/ready-sauce/chili-garlic-oil.jpg",
    sizes: [110],
    usage:
      "A flavorful mix of chili, crispy garlic, and coconut oil that delivers strong umami taste. Great for stir fry dishes, aglio e olio pasta, Chinese egg noodles, or as a spicy table dip.",
    checklist: ["Stir Fry", "Dipping", "Seasoning"],
  },
  {
    slug: "vegan-massaman-curry-paste",
    name: "Vegan Massaman Curry Paste",
    name_th: "แกงมัสมั่นเจปรุงสำเร็จ",
    categorySlug: "curry-premix",
    image: "/products/curry-premix/massaman.jpg",
    sizes: [110, 320, 1000],
    usage:
      "Mix curry paste with water and coconut milk and bring to boil. Then add diced beef, lamb, or chicken together with vegetables such as potato, onion, and peanuts.",
    checklist: ["Soup Paste", "Stir Fry"],
  },
  {
    slug: "vegan-red-curry-paste",
    name: "Vegan Red Curry Paste",
    name_th: "แกงแดงเจปรุงสำเร็จ",
    categorySlug: "curry-premix",
    image: "/products/curry-premix/red-curry.jpg",
    sizes: [110, 320, 1000],
    usage:
      "Mix curry paste with water and coconut milk and bring to boil. Then add vegetables and pineapple.",
    checklist: ["Curry", "Stir Fry"],
  },
  {
    slug: "vegan-green-curry-paste",
    name: "Vegan Green Curry Paste",
    name_th: "แกงเขียวเจปรุงสำเร็จ",
    categorySlug: "curry-premix",
    image: "/products/curry-premix/green-curry.jpg",
    sizes: [110, 320, 1000],
    usage:
      "Mix curry paste with water and coconut milk and bring to boil. Then add diced or roughly chopped vegetables.",
    checklist: ["Curry", "Stir Fry"],
  },
  {
    slug: "vegan-panang-curry-paste",
    name: "Vegan Panang Curry Paste",
    name_th: "แกงพะแนงเจปรุงสำเร็จ",
    categorySlug: "curry-premix",
    image: "/products/curry-premix/panang.jpg",
    sizes: [110, 320, 1000],
    usage:
      "Mix curry paste with water and coconut milk and bring to boil. Then add diced vegetables.",
    checklist: ["Curry", "Stir Fry"],
  },
  {
    slug: "vegan-yellow-curry-paste",
    name: "Vegan Yellow Curry Paste",
    name_th: "แกงเหลืองเจปรุงสำเร็จ",
    categorySlug: "curry-premix",
    image: "/products/curry-premix/yellow-curry.jpg",
    sizes: [110, 320, 1000],
    usage:
      "Mix curry paste with water and coconut milk and bring to boil. Then add diced vegetables.",
    checklist: ["Soup Paste", "Stir Fry"],
  },
  {
    slug: "vegan-tom-yum-paste",
    name: "Vegan Tom Yum Paste",
    name_th: "ต้มยำเจปรุงสำเร็จ",
    categorySlug: "curry-premix",
    image: "/products/curry-premix/tom-yum.jpg",
    sizes: [110, 320, 1000],
    usage:
      "Mix tom yum paste with water and coconut milk and bring to boil. Then add seafood or chicken with sliced vegetables such as lemongrass, galangal, lime leaf, mushrooms, red onion, and coriander.",
    checklist: ["Soup Paste", "Stir Fry"],
  },
  {
    slug: "vegan-tom-kha-paste",
    name: "Vegan Tom Kha Paste",
    name_th: "ต้มข่าเจปรุงสำเร็จ",
    categorySlug: "curry-premix",
    image: "/products/curry-premix/tom-kha.jpg",
    sizes: [110, 320, 1000],
    usage:
      "Mix tom kha paste with water and coconut milk and bring to boil. Then add diced chicken and sliced vegetables such as lemongrass, galangal, lime leaf, mushrooms, red onion, and coriander.",
    checklist: ["Soup Paste", "Stir Fry"],
  },
];