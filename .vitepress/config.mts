import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Puzzle Social",
  description: "Documentation",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
    ],

    sidebar: [
      {
        text: "About",
        items: [{ text: "Introduction", link: "/about" }],
      },
      {
        text: "Development",
        items: [
          { text: "Overview", link: "/overview" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Technology", link: "/technology" },
          { text: "Code", link: "/code" },
        ],
      },
      {
        text: "Deployment",
        items: [{ text: "Overview", link: "/deployment" }],
      },
      {
        text: "Scaling",
        items: [
          { text: "Overview", link: "/scaling" },
          { text: "Chat", link: "/chat" },
        ],
      },
      {
        text: "AI",
        items: [{ text: "Overview", link: "/ai" }],
      },
      {
        text: "Independence",
        items: [{ text: "Overview", link: "/independence" }],
      },
      {
        text: "Documentation",
        items: [{ text: "Overview", link: "/documentation" }],
      },
      {
        text: "Vision",
        items: [{ text: "Overview", link: "/vision" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ever-mira/puzzle-social" },
    ],

    logo: "/puzzles.png",
  },
});
