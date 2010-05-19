---
layout: default
header: "WebFont Loader"
---

Examples
--------

There's a lot you can do with WebFont Loader. Here are some ideas to get you
started. 

To make each example shorter, we'll assume that fonts have been loaded with
the following code. 

{% highlight html %}
<script src="webfont.js"></script>
<script>
  WebFont.load({
    google: {
      families: ['Droid Sans']
    }
  });
</script>
{% endhighlight %}


Remove the FOUT
---------------

Remove the [FOUT](http://paulirish.com/2009/fighting-the-font-face-fout/) in
FireFox by showing text using the web font only *after* the fonts have
downloaded. This sample makes Firefox behave like Safari.

{% highlight html %}
<style>
  h1 {
    font-family: 'Droid Sans';
    visibility: hidden;
  }
  .wf-active h1 {
    visibility: visible;
  }
</style>
<body>
  <h1>
    This headline will be hidden until 
    Droid Sans is completely loaded.
  </h1>
</body>
{% endhighlight %}


Create the FOUT
---------------

Webkit browsers don't suffer from the FOUT, but sometimes you might want to
show text as quickly as possible, even if the web font is not available. This
sample makes Safari behave like FireFox.

{% highlight html %}
<style>
  h1 {
    font-family: sans-serif;
  }
  .wf-active h1 {
    font-family: 'Droid Sans';
  }
</style>
<body>
  <h1>
    This headline will be visible in 'sans-serif', 
    then switch to 'Droid Sans'.
  </h1>
</body>
{% endhighlight %}


And much more
-------------

There's much more to it. Learn more about the [events](events.html).

