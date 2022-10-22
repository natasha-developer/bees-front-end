import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BEES FrontEnd`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass"]
};

module.exports = {
  plugins: [
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'BEES FrontEnd Challenge',
        short_name: 'BEES',
        start_url: '/',
        icon: 'src/images/bee-logo.png',
      },
    }
  ],
}

export default config;
