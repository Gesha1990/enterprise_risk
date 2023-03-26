const { override, addWebpackAlias, fixBabelImports } = require("customize-cra");
const path = require("path");

module.exports = {
  webpack: override(
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    }),
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    })
  ),
  jest: (config) => {
    config.transformIgnorePatterns = [
      "[/\\\\]node_modules[/\\\\]!@material-ui/.+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ];
    return config;
  },
};
