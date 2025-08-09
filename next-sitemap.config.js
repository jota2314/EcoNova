/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.econovaenergysaving.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'monthly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    }
  },
};

