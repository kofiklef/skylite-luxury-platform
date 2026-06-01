export type Brand = {
  id: string;
  number: string;
  name: string;
  sector: string;
  tagline: string;
  description: string;
  link: string;
  external?: boolean;
};

export const BRANDS: Brand[] = [
  {
    id: "adapted-abilities",
    number: "01",
    name: "Adapted Abilities Consulting",
    sector: "Education · Consulting",
    tagline: "Where Ability Finds Support.",
    description:
      "Inclusive education consulting deploying the AFRI Framework. IEP systems, teacher training and differentiated learning solutions.",
    link: "https://adaptedabilities.com",
    external: true,
  },
  {
    id: "skylite-naturals",
    number: "02",
    name: "Skylite Naturals",
    sector: "Wellness · Agro-Processing",
    tagline: "Nature's Goodness. Naturally You.",
    description:
      "Cold-pressed palm kernel oil, moringa powder, herbal teas, body butter, groundnut paste and clean-label food items.",
    link: "https://skylite-naturals.com",
    external: true,
  },
  {
    id: "btyr",
    number: "03",
    name: "Brightness of Thy Rising",
    sector: "Nonprofit · Education",
    tagline: "Inspired by Isaiah 60:3.",
    description:
      "U.S.-registered education nonprofit (501(c)(3) pending). Inclusive education, youth mentorship and faith-informed community development in Ghana.",
    link: "https://btyr.org",
    external: true,
  },
  {
    id: "ewib",
    number: "04",
    name: "EWiB — Educational Women in Business",
    sector: "Faith · Education · Entrepreneurship",
    tagline: "What others teach in 6 weeks — EWiB delivers in ONE day.",
    description:
      "Premium women's business academy. Five Business Engines. One full Saturday per Engine. Greater Accra, Ghana.",
    link: "/ewib",
  },
  {
    id: "chefz-nature",
    number: "05",
    name: "Chefz Nature",
    sector: "Food · Natural Recipes",
    tagline: "Let Your Taste Buds Imagine.",
    description:
      "Contemporary food brand. Clean-label sauces, spice blends, meal kits and recipe mixes for health-conscious home cooks.",
    link: "/brands#chefz-nature",
  },
  {
    id: "world-farming",
    number: "06",
    name: "World Farming",
    sector: "Agriculture · Advocacy",
    tagline: "Growing Food. Growing Futures.",
    description:
      "Sustainable food production, humane animal welfare and regenerative farming. Education, policy advocacy and coalition building.",
    link: "/brands#world-farming",
  },
  {
    id: "skylite-inspirations",
    number: "07",
    name: "Skylite Inspirations",
    sector: "Faith · Publishing",
    tagline: "Books that build worlds.",
    description:
      "Christian publishing imprint. Titles include The Woman Who Builds Worlds, JESUS & ME, Patterns in the Blood Line and Supernatural Living.",
    link: "/brands#skylite-inspirations",
  },
  {
    id: "beadnest",
    number: "08",
    name: "The BeadNest",
    sector: "Artisan Jewelry · E-Commerce",
    tagline: "Handcrafted since 2005.",
    description:
      "Handcrafted Ghanaian beaded jewelry — glass, semi-precious stones and eco-conscious metals. Small-batch, bespoke, sustainable.",
    link: "https://thebeadnest.com",
    external: true,
  },
  {
    id: "royal-skylite",
    number: "09",
    name: "Royal Skylite",
    sector: "Travel · Diaspora Consulting",
    tagline: "Curated heritage journeys.",
    description:
      "Ghana diaspora travel consulting for African Americans with Ghanaian roots. Cultural immersion and community connection. Launching Summer 2026.",
    link: "/brands#royal-skylite",
  },
  {
    id: "startsmart",
    number: "10",
    name: "Skylite StartSmart Studio",
    sector: "Entrepreneurship · Training",
    tagline: "Build. Brand. Launch.",
    description:
      "Business development and digital marketing education hub for West African entrepreneurs — white-labeling, marketing and product commercialization.",
    link: "/brands#startsmart",
  },
];
