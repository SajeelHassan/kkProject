
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
  ],
  siteMetadata: {
    title: "KK Marketing | KK Group",
    description: "Your All in one KK Marketing agency will make you stand out among the potential competitors with the marketing strategies you need.",
    url: "https://www.kkmarketing.pk", // No trailing slash allowed!
    image: "/images/logo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@kkmarketing_pk",
  },

}
