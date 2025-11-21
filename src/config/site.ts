export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/mohammad_al_faraj",
    linkedin: "https://www.linkedin.com/in/mohammed-al-faraj-2163428a",
    whatsapp: "https://wa.me/966554987612"
  },

  support: {
    phone: "+966-554 987612",
    email: "mfra2002@hotmail.com",
    whatsapp: "+966554987612"
  },

  certificate: "FL-479717920",

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
