import { defaultTheme } from "@vuepress/theme-default";

import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  lang: "en-US",
  title: "Shawn Turple",
  description: "Turple.ca",
  theme: defaultTheme({
    editLink: false,
    lastUpdated: false,
    repo: 'sturple/sturple.github.io',
    repoLabel: 'Github',
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
  }),
  plugins: [
    searchPlugin({
      // options
    })
  ],
});