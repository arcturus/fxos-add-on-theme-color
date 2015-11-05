Firefox OS add-on for changing the browser chrome color
=====================================================
You can find here a simple example of a Firefox OS add-on.

This add-on will change the browser chrome when you visit some specific web pages with the browser.

We will use the browser property ```theme-color``` to change it and make the sites look nicer.


How we change the chrome color?
-------------------------------

Despite of doing this via add-on the first thing to know is how to change the browser chrome color.

For doing this we need to add an extra header to our document, with the following format:

```html
  <meta name="theme-color" content="#db5945">
```

The ```name``` parameter defines that we want to use the ```theme-color``` property to change the color to the value specified in the ```content``` attribute.

We could see some web pages already doing this, below you can see an example how reddit does and how the top of the browser changes color to adapt to the web page colors:

![reddit example](https://raw.github.com/arcturus/fxos-add-on-theme-color/master/reddit-theme-color.png)


How we do create an add-on for Firefox OS to do this?
-----------------------------------------------------
First it will be nice to take a look to the [WebExtensions](https://wiki.mozilla.org/WebExtensions)  definition, also you have a complete tutorial on how to create add-ons on the [MDN web page for Firefox OS add-ons](https://developer.mozilla.org/en-US/Firefox_OS/Add-ons).

First add-on definition
-----------------------
Create a ```manifest.json``` file with the following basic elements:

```json
{
  "name": "Theme Color",
  "version": "1.0",
  "manifest_version": 3,
  "description": "Firefos OS addon for adding theme color to some webs",
  "permissions": [],
  "author": "Francisco Jordano",
  "content_scripts": [
    {
      "matches": ["https://m.facebook.com/*"],
      "js": ["js/index.js"],
      "css": []
    }
  ],
  "icons": {
    "128": "icons/128.png"
  }
}
```

The most important part here is the ```content_scripts``` one, here you will define when your add-on will be applied ```matches``` and what javascript and css files will be injected and executed (```js``` and ```css``` fields).

My add-on as a packaged Firefox OS app
--------------------------------------
You can install your add-on to your phone using WebIDE, but if you want to distribute it, you will need to do it through the [Marketplace](https://marketplace.mozilla.com), for doing that you will need to provide a ```update.webapp``` file with the following content:

```json
{
  "name" : "Add-on Theme-Color",
  "description": "Firefox OS add-on that adds theme color to some sites",
  "developer": { "name": "Francisco Jordano <francisco@jordano.es>" },
  "package_path": "extension.zip",
  "icons": {
    "128": "/icons/128.png"
  }
}
```

Again, pretty simple fields, just take a look to the ```package_path``` one, and remember to zip all the content of your add-on in the specified file.


Tips and tricks
---------------
To ensure that your javascript code is executed correctly, follow the MDN advice and execute your code betweeen the following snippet:

```javascript
// If injecting into an app that was already running at the time
// the app was enabled, simply initialize it.
if (document.documentElement) {
  initialize();
}

// Otherwise, we need to wait for the DOM to be ready before
// starting initialization since add-ons are usually (always?)
// injected *before* `document.documentElement` is defined.
else {
  window.addEventListener('DOMContentLoaded', initialize);
}

function initialize() {
  // ... here goes your code
}
```
