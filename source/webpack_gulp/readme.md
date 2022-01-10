# Webpack and Gulp POC project

## Gulp

## Webpack

## Why use both Webpack and Gulp

### Static File Handling

- Gulp can handle static assets better than Webpack - when it comes to watching file deletion or changes like overriding an image, gulp.watch is a safer bet;

### Compilation Time

- Sass gets processed by node-sass much quicker than by Webpack’s combination of sass-loader, css-loader and extract-text-webpack-plugin;

### Convenience

- In Webpack, you have to import your CSS and SVG files for instance into JavaScript to process them which can be quite tricky and confusing sometimes. With Gulp, you don’t need to adjust your workflow.

## Requirements

- Node v14 and the regarding Npm version

> RUN `npm install --save-dev @babel/core @babel/preset-env @babel/register gulp webpack webpack-manifest-plugin @babel/plugin-transform-runtime @babel/plugin-proposal-object-rest-spread terser-webpack-plugin babel-loader`

### `@babel/register`

- makes possible use of imports outside of the module
- used in the npm script

```json
{
  "scripts": {
    "build": "gulp build --require @babel/register --gulpfile tasks"
  }
}
```

- this is possible because of it:

```javascript
"./webpack";
import path from "path";
import webpack from "webpack";

"./index.js";
import gulp from "gulp";
import { scripts } from "./webpack";
export const build = gulp.series(scripts);
```

## Expanding

- it is to expand and write more tasks. Export a task in one file and import it in `index.js`. Clean and easy to maintain!

### './tasks' Folder structure setup idea

╔ build
╠ src
╠ tasks
║ ╠═══ config.js => project wide
║ ╠═══ icons.js => optimize/concat SVG
║ ╠═══ images.js => optimize images
║ ╠═══ index.js => run tasks
║ ╠═══ misc.js => copy, delete
║ ╠═══ server.js => start dev server
║ ╠═══ styles.js => CSS + preprocessor
║ ╚═══ webpack.js
╚ package.json
