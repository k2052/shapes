const emoji = require("remark-emoji");
const withTM = require("next-transpile-modules");

const withOrg = require("next-orga")({
  extension: /\.org?$/,
  options: {
    remarkPlugins: [emoji]
  }
});

module.exports = withTM(
  withOrg({
    pageExtensions: ["js", "jsx", "md", "org"],
    transpileModules: ["@k2052/example-article"]
  })
);
