### Basic Setup

1. Create new project and npm init
   - `mkdir parcel-demo && cd parcel-demo && npm init -y`
1. Install parcel locally
   - `npm install parcel-bundler --save-dev`
1. Create index html and JS files
   - `touch index.html && touch index.js`
1. Link script to html
   - `<script src="index.js"></script>`
1. Do a JavaScript!
   - `document.write('Hello, Parcel!);`
1. Add Parcel command to `package.json`
   - `"scripts": { "start": "parcel index.html" }`
1. Look upon your Works, ye Mighty, and despair!
   - Open browser to `localhost:1234`
1. Celebrate!

### Add Sass

1. Add sass
   - `$ npm install node-sass --save-dev`
1. Make Sass
   - `touch styles.scss`
1. Do a Sass
   ```
     $blue: steelblue;
     body {
         background-color: $blue;
         color: oldlace
     }
   ```
1. Look upon your Works, ye Mighty, and despair!
   - Open browser to `localhost:1234`
1. Celebrate!

### Add React

1. Add React and all the other stuff you need
   - `$ npm install --save react react-dom babel-preset-env babel-preset-react && touch .babelrc`
1. Add some babel presets
   ```json
   {
     "presets": ["react", "env"]
   }
   ```
1. Do a React

   ```js
   import React from "react";
   import ReactDom from "react-dom";

   const App = () => <h1>Hello, React!</h1>;

   const rootDiv = document.getElementById("root");

   ReactDom.render(<App />, rootDiv);
   ```

1. And an HTML
   - `<div id="root"></div>`
1. Look upon your Works, yadda yadda yadda
   - Open browser to `localhost:1234`
1. Celebrate!

### Add tests

1. Add Jest and babel presets

- `npm install --save-dev jest babel-preset-env babel-preset-react`

1. Add stuff to your `.babelrc`

```
{
  "presets": ["env", "react"]
}
```
