import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Documentação One Panel - Serviços de nuvem e VPS",
  tagline:
    "OnePanel oferece serviços de nuvem e soluções de VPS de alta performance, ajudando você a otimizar sua infraestrutura e focar no que realmente importa para o seu negócio.",
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
        srcDark: "img/logo_dark.svg",
      },
      items: [
        {
          href: "https://www.onepanel.com.br",
          label: "One Panel - Website",
          position: "right",
        },
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
          title: "Links",
          items: [
            {
              label: "Bem vindo",
              href: "/",
            },
            {
              label: "One Panel - Website",
              href: "https://www.onepanel.com.br",
            },
            {
              label: "GitHub",
              href: "https://github.com/onepanelcloud/documentation",
            },
          ],
        },
        {
          title: "Comunidade",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/2qdZrjP2",
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
