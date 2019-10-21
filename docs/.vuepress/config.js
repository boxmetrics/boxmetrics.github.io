const site = require("./site");

module.exports = {
  base: "/",
  title: site.title,
  description: site.description,
  lastUpdated: true,
  plugins: [
    "@vuepress/pwa",
    ["sitemap", { hostname: "http://boxmetrics.github.io" }]
  ],
  themeConfig: {
    base: "/boxmetrics.github.io/",
    logo: "/boxmetrics-logo.png",
    sidebar: "auto",
    sidebarDepth: 1,
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: true,
    nav: [
      {
        text: "Getting started",
        link: "/getting-started/"
      },
      {
        text: "Setup",
        link: "/setup/"
      }
    ],
    sidebar: [
      {
        title: "Getting started",
        path: "/getting-started/",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: "Step 1",
            path: "/getting-started/step-1"
          },
          {
            title: "Step 2",
            path: "/getting-started/step-2"
          }
        ]
      },
      {
        title: "Setup",
        path: "/setup/",
        collapsable: false,
        sidebarDepth: 1,

        children: [
          {
            title: "Dashboard",
            path: "/setup/dashboard"
          },
          {
            title: "API",
            path: "/setup/api"
          },
          {
            title: "Agent",
            path: "/setup/agent"
          },
          {
            title: "CLI",
            path: "/setup/cli"
          }
        ]
      }
    ]
  }
};
