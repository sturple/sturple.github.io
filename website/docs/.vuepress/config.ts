import { defaultTheme } from "@vuepress/theme-default";
import { debug } from "@vuepress/utils";

import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { getDirname, path } from '@vuepress/utils';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'


const __dirname = getDirname(import.meta.url)


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
      id: 'G-FX6HXTQK7G'
    }),
  ],
});