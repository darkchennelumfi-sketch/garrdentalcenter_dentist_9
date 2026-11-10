import type { MetadataRoute } from "next";

import { services } from "@/lib/services";

const baseUrl = "https://www.garrdental.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/reviews", priority: 0.7 },
    { path: "/offers", priority: 0.8 },
    { path: "/virtual-consult", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy", priority: 0.3 },
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
