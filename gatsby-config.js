module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind Styled Components Typescript Eslint starter`,
    description: `Starter project that includes typescript, eslint (airbnb), tailwind css and @emotion/styled for styling`,
    author: `@miloshinjio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
  ],
};
