import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Geek UI',
  description: 'Geek UI depend on Vue3',
  head: [['link', { rel: 'icon', href: 'https://geek-assistant.com/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' },
    ],
    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Text', link: '/components/text' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'Scrollbar Box', link: '/components/scrollbar-box' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Modal', link: '/components/modal' },
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
});
