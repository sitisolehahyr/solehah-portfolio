import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return [
    {
      url: new URL("/", baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}

