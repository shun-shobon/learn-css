module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet",
    },
  ],
};
