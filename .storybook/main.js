const path = require("path");

module.exports = {
  addons: [
    "@storybook/addon-a11y/register",
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ],
  webpackFinal: async (config) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    // Return the altered config
    return config;
  }
};
