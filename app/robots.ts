import type { MetadataRoute } from "next";

const allowSearchIndex = process.env.NEXT_PUBLIC_ALLOW_SEARCH_INDEX === "true";

export default function robots(): MetadataRoute.Robots {
  if (allowSearchIndex) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
