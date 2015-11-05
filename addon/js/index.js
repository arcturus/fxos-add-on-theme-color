// Adds a meta header to give color to your chrome browser!
function addThemeColor() {
  // First create the 'meta' tag
  var meta = document.createElement('meta');

  // Add the attributes 'name' and 'content'
  meta.setAttribute('name', 'theme-color');
  meta.setAttribute('content', '#3b5998');

  // We insert the new 'meta' tag into the 'heade'
  var head = document.head;
  if (head) {
    head.appendChild(meta);
  }
}

// If injecting into an app that was already running at the time
// the app was enabled, simply initialize it.
if (document.documentElement) {
  addThemeColor();
}

// Otherwise, we need to wait for the DOM to be ready before
// starting initialization since add-ons are usually (always?)
// injected *before* `document.documentElement` is defined.
else {
  window.addEventListener('DOMContentLoaded', addThemeColor);
}
