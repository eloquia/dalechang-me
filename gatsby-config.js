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
        name: 'hobbies',
        link: '/#hobbies'
      }
    ],
    currentTechnologies: [
      'Angular',
      'NodeJS',
      'Terraform',
      'AWS API Gateway',
      'AWS Lambda',
      'Gatsby'
    ],
    experienceStart: 2016
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
  ]
};
