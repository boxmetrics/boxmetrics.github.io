module.exports = {
  title: "boxmetrics",
  description:
    "boxmetrics is a set of services that allows you to monitor and obtain informations on the health, availability and performance of your servers",
  base: "/",
  lastUpdated: true,
  plugins: [
    "@vuepress/pwa",
    ["sitemap", { hostname: "http://boxmetrics.github.io" }]
  ],
  themeConfig: {
    logo: "/assets/images/boxmetrics-logo-full.png",
    sidebar: "auto",
    sidebarDepth: 1,
    docsDir: "pages",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: true
  }
};
