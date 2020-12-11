require("./src/styles/global.css");

module.exports = 
{
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: 
        {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
}