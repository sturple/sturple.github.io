import { defaultTheme } from "@vuepress/theme-default";

import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'


export default defineUserConfig({
  base: "/",
  lang: "en-US",
  title: "Turple.ca",
  description: "Turple.ca",
  theme: defaultTheme({
    editLink: false,
    lastUpdated: true,
    repo: 'sturple/sturple.github.io',
    repoLabel: 'Github',
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      // {
      //   text: 'Containers',
      //   link: '/guide/containers/index.md',
      // },
      // {
      //   text: 'Kubernetes',
      //   link: '/guide/kubernetes/index.md',
      // },
    ],
  }),
  plugins: [
    searchPlugin({
      // options
    }),
    googleAnalyticsPlugin({
      id: 'G-49MN2FWTBZ'
    }),
  ],
});