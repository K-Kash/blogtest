module.exports = {
  title: '　Kash-Kiku',
  base: '/blogtest/',
  description: 'Blog example for Mediumish theme with VuePress',
  logo: './assets/img/logo.png',
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  theme: require.resolve('../../'),
  themeConfig: {
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: '',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/wowthemesnet',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
      ],
    },

    smoothScroll: true
  },
}
