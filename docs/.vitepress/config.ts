import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Geek UI',
  description: 'Geek UI depend on Vue3',
  head: [['link', { rel: 'shortcut icon', href: './favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/grid' },
    ],
    sidebar: [
      {
        text: 'Development guide',
        items: [{ text: 'Quick Start', link: '/quick-start' }],
      },
      {
        text: 'Components',
        items: [
          { text: 'Layout', items: [{ text: 'Grid', link: '/components/grid' }] },
          {
            text: 'Basic',
            items: [
              { text: 'Button', link: '/components/button' },
              { text: 'Text', link: '/components/text' },
              { text: 'Tag', link: '/components/tag' },
              { text: 'Icon', link: '/components/icon' },
            ],
          },
          {
            text: 'Navigation',
            items: [{ text: 'Pagination', link: '/components/pagination' }],
          },
          {
            text: 'Statastic/Display',
            items: [
              { text: 'Table', link: '/components/table' },
              { text: 'Carousel', link: '/components/carousel' },
            ],
          },
          {
            text: 'Feedback',
            items: [
              { text: 'Modal', link: '/components/modal' },
              { text: 'Progress', link: '/components/progress' },
              { text: 'Loading', link: '/components/loading' },
            ],
          },
          {
            text: 'Other',
            items: [
              { text: 'Scrollbar Box', link: '/components/scrollbar-box' },
              { text: 'Timeline', link: '/components/timeline' },
            ],
          },
        ],
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //   ],
      // },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/geektech-team/geek-ui' }],
  },
  markdown: {
    lineNumbers: true,
  },
  vite: {
    // Vite config options
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import (reference) "./src/style/theme/default.less";',
        },
      },
    },
    server: {
      port: 6688,
    },
  },
});
