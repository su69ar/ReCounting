import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: "ReCounting",
        description: siteConfig.description,
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0a7cff",
        orientation: "portrait-primary",
        categories: ["business", "finance", "productivity"],
        icons: [
            {
                src: "/assets/logo/ReCounting_Accounting_Tax_Services_Bali.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/assets/logo/ReCounting_Accounting_Tax_Services_Bali.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
