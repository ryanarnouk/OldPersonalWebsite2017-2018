module.exports = {
  siteMetadata: {
    title: `Azbo400`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato`, `sans-serif`]
      }
    }
  ]
}
