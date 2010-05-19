---
layout: default
header: "WebFont Loader"
---

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


Want to host your own fonts and CSS? 

{% highlight javascript %}
WebFont.load({
  custom: {
    families: ['My Font', 'My Other Font'],
    urls: ['/fonts.css']
  }
});
{% endhighlight %}



Learn more about the full set of [supported
modules](http://github.com/typekit/webfontloader/blob/master/docs/MODULES.md)
and their features.