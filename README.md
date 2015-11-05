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
