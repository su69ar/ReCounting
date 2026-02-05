export const siteConfig = {
  name: "ReCounting",
  url: "https://recounting.id",
  description:
    "Stress-free accounting, bookkeeping, and tax compliance services for SMEs and expats in Bali, Indonesia.",
  phone: "0811-3940-4640",
  phoneIntl: "+62 811-3940-4640",
  whatsappNumber: "6281139404640",
  email: "recountingasia@gmail.com",
  address: "Jalan Sedap Malam No 9A Sanur Kaja, Denpasar - Bali",
  hours: "Mon–Fri, 08:00–17:00 WITA",
  socials: {
    instagram: "https://www.instagram.com/recounting",
    linkedin: "https://www.linkedin.com/company/recounting",
    facebook: "https://www.facebook.com/recounting",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Tax Compliance", href: "/services/tax-compliance" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hi ReCounting, I'd like to discuss accounting services for my business."
)}`;

export const primaryCta = {
  label: "Book Free Consultation",
  href: "/free-consultation",
};

export const secondaryCta = {
  label: "Chat on WhatsApp",
  href: whatsappUrl,
};
