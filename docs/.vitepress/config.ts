import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Geek UI",
  description: "Geek UI",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Button', link: '/components/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geektech-team/geek-ui' }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
