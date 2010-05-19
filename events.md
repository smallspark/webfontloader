---
layout: default
header: "WebFont Loader"
---

Events
------

Events provide information about the loading status of your web fonts. They
come in both CSS and JavaScript flavors, but the semantics are the same.

Global Events

  * **Loading** - Triggered when all fonts have been requested.
  * **Active** - Triggered when all of the fonts have rendered.
  * **Inactive** - Triggered when the browser does not support
      linked fonts *or* if none of the fonts could be loaded.

Font Events

  * **Font Loading** - Triggered once for each font that's loaded.
  * **Font Active** - Triggered once for each font that renders.
  * **Font Inactive** - Triggered if the font can't be loaded.

CSS Flavored
------------

CSS events are implemented as classes on the `html` element.

{% highlight css %}
html.wf-loading
html.wf-active
html.wf-inactive
html.wf-familyname-fvd-loading
html.wf-familyname-fvd-active
html.wf-familyname-fvd-inactive
{% endhighlight %}

**familyname** is a sanitized version of the name of each font family. Spaces
and underscores are removed from the name, and all characters are converted to
lower case. For example, `Droid Sans` becomes `droidsans`.

**fvd** is a [Font Variation Description][fvd]


JavaScript Flavored
-------------------

JavaScript events are implemented as callback functions on the `WebFont.load`
function.

{% highlight javascript %}
WebFont.load({
  loading: function() {
  },
  active: function() {
  },
  inactive: function() {
  },
  fontloading: function(familyName, fvd) {
  },
  fontactive: function(familyName, fvd) {
  },
  fontinactive: function(familyName, fvd) {
  }
});
{% endhighlight %}


**familyName** is the original name of the font family such as `"Droid Serif"`.

**fvd** is a [Font Variation Description][fvd]


Put it to use
-------------

Check out [the examples](examples.html) for a few ideas of how to use events.


[fvd]: fvd.html

