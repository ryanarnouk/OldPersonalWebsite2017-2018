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
  ],
  pathPrefix: 'https://github.com/Azbo400/Azbo400.github.io'
}
