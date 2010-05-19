---
layout: default
header: "WebFont Loader"
---

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