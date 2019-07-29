# This is a book

This is the README for using the book, if you want to actually read this book you can click over to [src/README.org](./src/README.org)

## Usage

A book is a npm package so all the typical npm stuff applies, npm publish, npm run build to build etc. The html version is built using next.js so all the next.js stuff applies for building the html.

### Including in a Project

Books are npm packages so they can be easily included in a project. Install the mdx loader into your favorite bundler and then just import like this:

```javascript 
import TOC from "book-name/TOC.mdx"

const App = () => {
  return (
    <TC />
  )
}
```

**TODO**: Add js compilation

You can also import the javascript version by doing:

```javascript 
import Book from "article-name/index.js"

const App = () => {
  return (
    <Book />
  )
}
```

### Assets

Books are flat npm packages and using any assets is as simple as importing them:

```javascript 
import CoverImage from "book-name/assets/cover.png"
```

### Components

Some books use mdx and export components. You can import and use these like any JS module, you will need to make sure to run them through babel as the raw ES6 code is published and no commonjs modules are provided.

### Building

You can build the ebook's site using next:

```sh 
$ npm run build
```

### Building Epub

https://github.com/cyrilis/epub-gen

### Building PDF

Run:

```sh
$ npm run build:pdf
```

### Publishing to NPM

Run the following:

```sh 
$ npm run build && cd dist/ && npm publish --access public
```

Or:

```sh 
$ npm run release
``**

### Publishing to Leanpub

**TODO** 

- Implement Leanpub publishing

## License

This book is licensed under ISC. (c) K-2052
