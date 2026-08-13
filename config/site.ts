export const WA_NUMBER = "6285727956892";

export const SITE_URL = "https://alfproduction.id";

export const brand = {
  name: "ALF Production",
  tagline: "Spesialis Produksi Mars & Hymne Sekolah",
  logo: "../public/logo.png",
} as const;

export interface NavItem {
  label: string;
  to: string;
  external: boolean;
}

export const nav: NavItem[] = [
  { label: "Home", to: "/", external: false },
  { label: "Tentang Kami", to: "/tentang", external: false },
  { label: "Layanan & Paket", to: "/layanan", external: false },
  { label: "Portofolio", to: "/portofolio", external: false },
  { label: "Cara Pemesanan", to: "/cara-pemesanan", external: false },
  // { label: 'Kemitraan', to: '/kemitraan', external: false },
  { label: "FAQ", to: "/faq", external: false },
  { label: "Kontak", to: "/kontak", external: false },
];

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
}

export const socials: SocialLink[] = [
  {
    name: "Instagram",
    handle: "@alfproduction-id",
    url: "https://www.instagram.com/alfproduction/",
  },
  {
    name: "YouTube",
    handle: "ALF Production (@alfproduction-id)",
    url: "https://www.youtube.com/@alfproduction-id",
  },
  {
    name: "Website",
    handle: "alfproduction.id",
    url: "https://alfproduction.id",
  },
];

export const contact = {
  whatsappDisplay: "0857-2795-6892",
  email:
    "media.alfproduction@gmail.com" /* [ISI EMAIL BISNIS] placeholder, left empty */,
  address: "" /* [ISI] placeholder, left empty */,
} as const;

export const waMessage =
  "Halo ALF Production, saya ingin konsultasi pembuatan Mars/Hymne...";

export function waLink(message?: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message ?? waMessage)}`;
}

export const heroStats: string[] = [
  "10+ Lagu Ciptaan",
  "100% Studio Grade",
  "Partitur Balok/Angka",
];

export const whyUs: string[] = [
  "Fokus pada produksi Mars & Hymne sekolah/lembaga",
  "Pilihan paket disesuaikan dengan kebutuhan lembaga",
  "Proses produksi dikerjakan secara terarah",
  "Layanan mencakup kebutuhan musikal dan produksi audio sesuai paket",
  "Portofolio karya dapat didengarkan melalui kanal ALF Production.",
];
