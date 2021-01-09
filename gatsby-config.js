require("dotenv").config({
  path: `.env`,
});
const isPolish = process.env.LANG_VERSION === 'pl';
const host = isPolish ? 'https://dziejekhorinis.org' : 'https://historyofkhorinis.org';
module.exports = {
  siteMetadata: {
    title: isPolish ? `Dzieje Khorinis - prequel gry Gothic` : 'The History Of Khorinis - prequel of Gothic game',
    description: isPolish ? `Dzieje Khorinis to dodatek do popularnej gry Gothic, wprowadzający całkiem nową historię osadzoną w burzliwych czasach, na ponad 10 lat przed wydarzeniami pierwszej oraz drugiej części sagi.` : `Myrtana, the Vaduz Island, not long before the creation of magic barrier and not long after the beginning of war with orcs. Thanks to the fate, leading a rather monotonous life, Lars becomes a participant in the event that changes everything. In mysterious circumstances, twelve of the most powerful mages of the kingdom led by famous Grandmaster of Fire, Xardas, arrive on the island. No one knows, what they are doing there. The only thing that is known is that soon they plan to continue their journey.`,
    author: `Artur Kasperek`,
    siteUrl: host
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-cname`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `${host}`,
        sitemap: `${host}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
