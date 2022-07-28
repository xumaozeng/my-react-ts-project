const { override, addWebpackAlias, fixBabelImports, addLessLoader, adjustStyleLoaders } = require("customize-cra");
const path = require("path");

module.exports = override(
  // 添加alias别名
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src")
  }),
  // 按需引入antd样式
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "orange" }
    }
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  })
);
