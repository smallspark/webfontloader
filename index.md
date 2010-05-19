---
layout: default
header: "WebFont Loader gives you control when using linked fonts via @font-face."
---

Web fonts may be the best thing to happen to web design in years, but that
doesn't mean there aren't some tricky issues to overcome. One of the most
annoying things is dealing with what's become known as the
[FOUT](http://paulirish.com/2009/fighting-the-font-face-fout/) or 'Flash of
Unstyled Text'. It's what happens in some browsers while waiting for fonts to
download.

WebFont Loader puts you back in control. It's simple: get notified when fonts
have completely loaded. Once you know that, you can do cool things with, like

* Control the FOUT
* Normalize font metrics between the fallback font and the web font
* Show a loading message
* Anything!


Quick Start
-----------

The simplest thing to do with WebFont Loader to get some fonts from [Google's 
Font API](http://code.google.com/apis/webfonts/), and control the FOUT.

{% highlight html %}
<!doctype html>
<html>
<head>
  <script src="webfont.js"></script>
  <script>
    WebFont.load({
      google: {
        families: ['Droid Sans']
      }
    });
  </script>
  <style type="text/css">
    h1 {
      visiblity: hidden;
      font-family: 'Droid Sans';
    }
    .wf-active h1 {
      visiblity: visible;
    }
  </style>
</head>
<body>
  <h1>No more FOUT</h1>
</body>
</html>
{% endhighlight %}

Here we hide the page's headline until web fonts are active. Easy. 
See [more examples](examples.html).


Learn More
----------

WebFont Loader provides access to a variety of webfont services through its
[module system](modules.html). Today you can use it to load fonts from Google,
Typekit or even your own self-hosted CSS.

Controlling the FOUT just scratches the surface of what WebFont Loader lets
you do. Learn more about the [event system](events.html).





