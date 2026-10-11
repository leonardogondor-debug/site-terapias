import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// robots.txt (/robots.txt): libera o site e aponta o sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
