module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/icon.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }]
      ],
      plugins: ['@vuepress/pwa', {
          serviceWorker: true,
          updatePopup: true
      }],    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        title: 'My VuePress Site',

        sidebar: [
            '/',
            '/Page-1',
            '/Page-2'
        ]
    }
}
