// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Node Finance Documentation",
  tagline: "Your one-stop-shop for Web3 Infrastructure",
  url: "https://docs.nodefinance.org",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/node-logo.png",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/sdk",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "application-api",
        path: "docs/wallet-service-api",
        routeBasePath: "docs/wallet-service",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "data-and-analytics",
        path: "docs/data-and-analytics-api",
        routeBasePath: "docs/data-and-analytics-api",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: "Node Finance",
        logo: {
          alt: "Node Logo",
          src: "img/node-logo.png",
        },
        items: [
          {
            type: "doc",
            label: "SDK",
            position: "left",
            docId: "intro",
          },
          {
            type: "doc",
            docId: "wallets/registering-a-wallet",
            position: "left",
            label: "Application API",
            docsPluginId: "application-api",
          },
          {
            href: "https://github.com/Node-Fi/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "SDK",
                to: "/sdk/intro",
              },
              {
                label: "API",
                to: "/sdk/intro",
              },
              {
                label: "Minima",
                to: "/minima/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Website",
                href: "https://nodefinance.org",
              },
              {
                label: "Discord",
                href: "https://discord.gg/EQzVKSNTPM",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/nodefi",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Node-Fi",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Node Finance, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
