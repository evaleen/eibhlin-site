const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Website',
  },
  plugins: ['gatsby-plugin-styled-components'],
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Website',
    description: 'Eibhlins website',
    author: '@evaleen',
    siteUrl: 'https://eibhlin.ie',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Eibhlin's Website`,
        start_url: '/',
        background_color: '#f0f0f0',
        theme_color: '#39e09b',
        display: 'minimal-ui',
        // icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
      },
    },
  ],
}
