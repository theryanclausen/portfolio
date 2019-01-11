module.exports = {
  siteMetadata: {
    title: `Ryan Clausen`,
    subtitle:'Fullstack Developer',
    description: `Fullstack Developer Ryan Clausen's Portfolio Page`,
    author: `Ryan Clausen`,
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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blogs`,
        name: 'blogs'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ryan-clausen-web-dev`,
        short_name: `ryan-clausen`,
        start_url: `/`,
        icon: `src/images/ryan-img.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options:{
        maxWidth: 900,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
