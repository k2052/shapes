# This is an article

This is the README for using the article, if you want to actually read this article you can click over to [src/README.org](./src/README.org)

## Usage

An article is a npm package so all the typical npm stuff applies, npm publish, npm run build to build etc.

### Including in a Project

Articles are npm packages so they can be easily included in a project. Install a markdown loader (such as mdx) into your favorite bundler and then just import like this:

```javascript 
import Article from "article-name/index.mdx"

const App = () => {
  return (
    <Article />
  )
}
```

**TODO**: Add js compilation

You can also import the javascript version by doing:

```javascript 
import Article from "article-name/index.js"

const App = () => {
  return (
    <Article />
  )
}
```

### Assets

Articles are flat npm packages and using any assets is as simple as importing them:

```javascript 
import CoverImage from "article-name/assets/cover.png"
```

### Components

Some articles use mdx and export components. You can import and use these like any JS module, you will need to make sure to run them through babel as the raw ES6 code is published and no commonjs modules are provided.

### Building

You can build markdown, org, and mdx versions by running the build task e.g:

```sh 
$ npm run build
```

### Building Markdown

You can build a markdown version using the `build:markdown` task

```sh 
$ npm run build:markdown
```

### Publishing to NPM

Run the following:

```sh 
$ npm run build && cd dist/ && npm publish --access public
```

Or:

```sh 
$ npm run release
```

### Publishing to Medium

Unfortunately medium has removed integration tokens and it is no longer possible to publish via cli. The quickest workflow is the following:

1.  Generate markdown with 
    `npm run build:markdown`
2.  Use https://markdowntomedium.com/create

### Publishing to Dev.to

Dev.to currently lacks an API so posting must be done manually. There is work being done on an API https://github.com/thepracticaldev/dev.to/issues/911

## License

This article is licensed under ISC. (c) K-2052
