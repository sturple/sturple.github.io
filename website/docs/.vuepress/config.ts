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
      {
        text: 'Containers',
        link: '/guide/containers/index.md',
      },
      {
        text: 'Kubernetes',
        link: '/guide/kubernetes/index.md',
      },
    ],
  }),
  plugins: [
    searchPlugin({
      // options
    })
  ],
});