module.exports = {
  siteMetadata: {
    title: `Lyndon Shi`,
    description: `Personal website for Lyndon Shi.`,
    author: `Lyndon Shi`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
