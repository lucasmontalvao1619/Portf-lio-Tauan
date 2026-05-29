export const SITE = {
  brand: {
    firstName: "Rafael Tauan",
    lastName: "Bispo dos Santos Mota",
    fullName: "Rafael Tauan Bispo dos Santos Mota",
  },
  hero: {
    tagline:
      "Transforme seu corpo, transforme sua vida. Treinamento personalizado de elite para resultados extraordinários.",
    cta: "Entre em Contato",
  },
  developer: {
    name: "Lucas Oliveira",
    url: "https://www.instagram.com/luk.devv/",
  },
  copyrightYear: 2026,
} as const;

export const LINKS = {
  whatsapp: "https://wa.me/5579988209948",
  instagram:
    "https://www.instagram.com/rafael.tauan_?igsh=NjcwcDcxd2JyZjRh&utm_source=qr",
  tiktok: "https://www.tiktok.com/@rafael.tauan?_r=1&_t=ZS-96igk4e0oJc",
  email: "mailto:rafael.tauan@hotmail.com",
} as const;

export type SocialIcon = "instagram" | "whatsapp" | "tiktok" | "mail";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: SocialIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { id: "instagram", label: "Instagram", href: LINKS.instagram, icon: "instagram" },
  { id: "whatsapp", label: "WhatsApp", href: LINKS.whatsapp, icon: "whatsapp" },
  { id: "tiktok", label: "TikTok", href: LINKS.tiktok, icon: "tiktok" },
  { id: "email", label: "Email", href: LINKS.email, icon: "mail" },
];
