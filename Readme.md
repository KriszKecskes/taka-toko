# 📚 Taka-Toko
 Taka-toko is a boilerplate, that can help you to build React component(s) and export them as an NPM package.

## 📝 How to use it?!
The **index.js** is the main part of this boilerplate. You can define here, which component or components would you export as the part of your NPM package.

You can use your own NPM package name instead of **taka-toko** of course! You only need to change the name property in the **package.json**.

After you finished your components and imported them in to the **index.js** file, you can define what would you export from them as a reusable npm package component.

So, in the **index.js** file you need to export them like this:

````javascript
export {
  YourComponent,
  YourComponent2,
  YourComponent3,
  /*etc..*/
}
````
At last but not at least, you need to build the project with a command:

````javascript
npm run build
````

In th end, you need to publish your NPM package. First, you need to log in to the NPM system:

````javascript
npm login
````

And then, you need to publish your package:

````javascript
npm publish
````

## ☀️ Use your package in external project

After the publish process you can install your package in your external project:

````javascript
npm install you-package-name
````

And then you can import your component or components that you created before:

````javascript
import { YourComponent, YourComponent2, YourComponent3 /*...etc*/ } from 'your-package-name';
````
