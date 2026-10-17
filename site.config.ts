import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Taste of Culture Catering",
  tagline: "Caribbean style catering and meal prep for corporate and social events in Toronto.",
  category: "Caribbean catering",
  schemaType: "FoodEstablishment",
  area: "Toronto, ON",
  siteUrl: "https://tasteofculturecatering.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#9a3d3d" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Caribbean catering in Toronto",
    headline: "Exceptional flavours for every occasion",
    subhead:
      "Authentic Caribbean cooking for corporate gatherings, social events, and weekly meal prep. Message us for a menu or quote.",
    images: [
      { src: "/images/post-1.jpg", alt: "Elevated Caribbean catering presentation" },
      { src: "/images/post-2.jpg", alt: "Authentic Caribbean meals prepared with care" },
      { src: "/images/post-5.jpg", alt: "Fresh meal prep and catering trays" },
    ],
    secondaryCta: { label: "See the gallery", href: "#gallery" },
  },

  highlights: [
    "Caribbean style cooking",
    "Corporate and social events",
    "Weekly meal prep",
    "Orders by Instagram DM",
  ],

  about: {
    title: "Food made with care",
    body: [
      "Taste of Culture Catering is a full service catering company bringing Caribbean style cooking to Toronto. We create customized menus for corporate functions and social events, with authentic flavours and elegant presentation.",
      "From quiet family dinners and weekly meal prep to office lunches and celebrations, we prepare fresh, flavour packed meals with generous portions. Share your date, guest count, and any allergies so every dish is safe and enjoyable.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Caribbean meals that bring people together" },
  },

  menu: {
    label: "Menu",
    title: "What we offer",
    intro: "Menus are customized for your event or meal prep plan. Message us for options and a quote.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your date and guest count.",
    groups: [
      {
        title: "Catering",
        items: [
          { name: "Corporate catering", description: "Customized menus for office lunches and corporate functions." },
          { name: "Social events", description: "Celebrations, gatherings, and special occasions with Caribbean flavours." },
          { name: "Customized menus", description: "Built around your guest list, preferences, and dietary needs." },
        ],
      },
      {
        title: "Meal prep",
        items: [
          { name: "Weekly meal prep", description: "Freshly prepared meals with real ingredients and proper portions." },
          { name: "High protein fitness meals", description: "Balanced options for everyday life." },
          { name: "Plant based options", description: "Available when you ask." },
        ],
      },
    ],
    footnote: "Please share allergies and sensitivities before meals are prepared.",
  },

  gallery: {
    title: "From our kitchen",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1350, alt: "Elevated catering presentation", caption: "Elevated experiences", href: "https://www.instagram.com/p/DedDmoEtV4x/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1350, alt: "Caribbean meals for family and events", caption: "Food that brings people together", href: "https://www.instagram.com/p/DbJO8gysHM3/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1350, alt: "Fresh meals thoughtfully prepared", caption: "Made for you", href: "https://www.instagram.com/p/DTbI7w0j2Vv/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1350, alt: "Meal prep and catering trays", caption: "Meal prep and catering", href: "https://www.instagram.com/p/DTS1ADbDZcM/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1350, alt: "Fresh flavour packed meals", caption: "Good food, no stress", href: "https://www.instagram.com/p/DTORmyfDz0k/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1080, alt: "Vegetarian dish", caption: "Veggie options", href: "https://www.instagram.com/p/CtcTljLOpIm/" },
      { src: "/images/post-10.jpg", width: 1080, height: 1920, alt: "Caribbean chow mein", caption: "Caribbean flavours", href: "https://www.instagram.com/p/CoQlKk9tId2/" },
      { src: "/images/post-3.jpg", width: 640, height: 1136, alt: "Client testimonial reel still", caption: "Happy clients", href: "https://www.instagram.com/p/DTzJsH0jSvB/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "tasteofculturecatering",
    embeds: [
      "https://www.instagram.com/p/DedDmoEtV4x/",
      "https://www.instagram.com/p/DbJO8gysHM3/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Request a menu or quote",
    intro: "Orders and quotes are handled on Instagram. Tap below to copy a starter message, then paste it into the chat.",
    dmMessage:
      "Hi Taste of Culture! I would like a quote.\nEvent or meal prep:\nDate needed:\nGuest count or servings:\nMenu preferences:\nAllergies or dietary needs:\n",
    links: [],
    note: "Share allergies and preferences before meals are prepared.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send an Instagram DM with your date, guest count or servings, and what you need. We will share a menu or quote in the chat." },
    { q: "Do you do corporate catering?", a: "Yes. We create customized Caribbean menus for corporate functions and office lunches." },
    { q: "Do you offer meal prep?", a: "Yes. Weekly meal prep is available, including high protein and plant based options when you ask." },
    { q: "Where are you based?", a: "We are based in Toronto, Ontario, and cater corporate and social events." },
  ],

  contact: {
    area: "Toronto, Ontario",
    socials: [],
  },

  seo: {
    title: "Taste of Culture Catering | Caribbean catering in Toronto",
    description:
      "Caribbean style catering and meal prep in Toronto. Corporate events, social gatherings, and weekly meals. Message for a quote.",
    keywords: [
      "Caribbean catering Toronto",
      "meal prep Toronto",
      "corporate catering Toronto",
      "Caribbean food catering",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
