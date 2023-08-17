/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.mynecraft.jp",
  generateRobotsTxt: false,
  sitemapSize: 5000,
  outDir: "./out",
};
