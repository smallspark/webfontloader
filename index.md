---
layout: default
---

Web fonts may be the best thing to happen to web design in years, but that
doesn't mean there aren't some tricky issues to overcome. One of the most
annoying things is dealing with what's become known as the
[FOUT](http://paulirish.com/2009/fighting-the-font-face-fout/) or 'Flash of
Unstyled Text'. It's what happens in some browsers while waiting for fonts to
download.

WebFont Loader puts you back in control. It's simple: be notified when fonts
are loading, and have become active. You can do cool things with that
information, like

* Control the FOUT
* Normalize font metrics between the fallback font and the web font
* Show a loading message
* Anything!


Modules
-------

WebFont Loader provides events for all fonts, regardless of where you load them
from. Use [Google's Font API](http://code.google.com/apis/webfonts/), [Typekit](http://typekit.com/)
or even your own self-hosted CSS and font files. Each service provider is
defined by its own *module*.

Let's get started quickly by loading them from Google.

{% highlight html %}
<script src="webfont.js"></script>
<script>
  WebFont.load({
    google: {
      families: ['Droid Sans', 'Droid Serif']
    }
  });
</script>
{% endhighlight %}

Or, use Typekit.

{% highlight javascript %}
WebFont.load({
  typekit: {
    id: 'yourKitId'
  }
});
{% endhighlight %}

Even combine them...

{% highlight javascript %}
WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif']
  },
  typekit: {
    id: 'yourKitId'
  }
});
{% endhighlight %}


Learn more about the full set of [supported
modules](http://github.com/typekit/webfontloader/blob/master/docs/MODULES.md)
and their features.


Events
------

Now that your fonts are loading, let's add some events. Events come in both
CSS and JavaScript flavors, but the semantics are the same.

  * **Loading** - Triggered when all fonts have been requested.
  * **Active** - Triggered when all of the fonts have rendered.
  * **Inactive** - Triggered when the browser does not support
      linked fonts *or* if none of the fonts could be loaded.
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

**fvd** is a *Font Variation Description*. 


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

**fvd** is a *Font Variation Description*.


Font Variation Description
--------------------------

Put simply, it's a shorthand for describing a particular font as just one part
of a full family.

{% highlight css %}
@font-face {
  family-name: 'Droid Serif';
  font-style: normal;
  font-weight: normal;
}
=> n4
{% endhighlight %}

{% highlight css %}
@font-face {
  family-name: 'Droid Serif';
  font-style: italic;
  font-weight: bold;
}
=> i7
{% endhighlight %}

If no style/weight is specified, the default `n4` will be used.