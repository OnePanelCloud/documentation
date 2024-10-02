import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Documentação One Panel",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.onepanel.com.br",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "OnePanelCloud", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Documentação One Panel",
      logo: {
        alt: "One Panel Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/OnePanelCloud/documentation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentação",
          items: [
            {
              label: "Introdução",
              to: "/",
            },
          ],
        },
        {
          title: "Comunidade",
          items: [
            {
              label: "Discord",
              href: "/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/onepanelcloud/",
            },
          ],
        },
        {
          title: "Mais",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/onepanelcloud/documentation",
            },
          ],
        },
      ],
      copyright: `&copy; ${new Date().getFullYear()} One Panel. Todos os Direitos Reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
