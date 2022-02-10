module.exports = {
  siteMetadata: {
    title: `Dale Chang`,
    description: `Personal and Portfolio Website for Dale Chang`,
    author: `@eloquia`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'bio',
        link: '/#bio'
      },
      {
        name: 'work',
        link: '/#work'
      },
      {
        name: 'education',
        link: '/#education'
      },
      {
        name: 'interests',
        link: '/#interests'
      }
    ],
    experienceStart: 2016
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-breakpoints`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bio`,
        path: `${__dirname}/src/data/bio`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blurb`,
        path: `${__dirname}/src/data/blurb`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `interests`,
        path: `${__dirname}/src/data/interests`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/data/work`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-ts-tw-eslint-styled-starter`,
        short_name: `ts-tw-es-styled-starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.tsx'),
      },
    },
    `gatsby-plugin-postcss`,
  ]
};
