import { permanentRedirect } from "next/navigation";

export default function LegacyTaxDeadlinesPage() {
  permanentRedirect("/blog/tax-deadlines-indonesia-2026/");
}
