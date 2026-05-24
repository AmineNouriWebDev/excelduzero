export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/profile", "/auth/update-password", "/auth/reset-password", "/api/"],
    },
    sitemap: "https://excelduzero.com/sitemap.xml",
  };
}
