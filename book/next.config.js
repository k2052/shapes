const emoji = require("remark-emoji");
const withTM = require("next-transpile-modules");
const rehypePrism = require("@mapbox/rehype-prism");
const rehypeHighlight = require("rehype-highlight");

const withOrg = require("next-orga")({
  extension: /\.org?$/,
  options: {
    remarkPlugins: [emoji],
    rehypePlugins: [rehypeHighlight]
  }
});

const withCSS = require("@zeit/next-css");

module.exports = withTM(
  withCSS(
    withOrg({
      cssModules: true,
      pageExtensions: ["js", "jsx", "md", "org"],
      transpileModules: ["md-styles", "@getgood/lib"]
    })
  )
);
