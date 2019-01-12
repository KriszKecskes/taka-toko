# 📚 Taka-Toko
 Taka-toko is a library, that can help to build React component(s) and export it as an NPM package.

## How to use?!
* Taka-toko uses Webpack for bundle your code. The main concept takes place inside the *index.js*. You can export your React component or components in it.
* You can publish your NPM package (of course you can change the project name inside the package.json / name), and after that, you can install it in your external project.

So as you can see, I left an example component inside the project, named Test. In the *index.js*, I can export it like this:

````javascript
export {
  Test
  OtherComponent
  //...Other component name
};
````
So, after I built (*npm run build*) the project and published the library with *npm publish* command, I can use it in my external project, like this:

````javascript
import { Test, OtherComponent } from 'your-package';
````
Of course, you need to install your npm package inside the external project before you can use it.