module.exports = {
  siteMetadata: {
    siteUrl: `https://quarentenadeesperanca.netlify.app`,
    title: `Quarentena de Esperança`,
    description: `Reunimos o melhor conteúdo da web para você desfrutar nesse periodo tão delicado`,
    author: `@renan`,
    image: `https://image.freepik.com/vetores-gratis/ficar-em-casa-relaxar-conceito_23-2148479286.jpg`
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
       icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `http://quarentenadeesperanca.netlify.app`,
        sitemap: `https://quarentenadeesperanca.netlify.app/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
