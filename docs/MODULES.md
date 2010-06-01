# Modules

WebFont Loader provides a generic module system so that any web font provider
may be used. The specifics of each provider are documented here.


## Google

Using Google's Font API, name the font families you'd like to load.

    WebFont.load({
      google: {
        families: ['Droid Sans', 'Droid Serif']
      }
    });

Learn more about the [Google Font API][gfontapi].


## Typekit

When using Typekit, specify the Kit to retrieve by its ID. You can find this
ID within Typekit's Kit Editor interface.

    WebFont.load({
      typekit: {
        id: 'xxxxxx'
      }
    });

Learn more about [Typekit][tk].

## TypeFront

When using TypeFront, you specify a set of font IDs and a set of corresponding font families.

You can find your font ID and family name by clicking on 'Font information' within the TypeFront interface.

    WebFont.load({
      typefront: {
        ids: ['xxxxxx', 'xxxxxx'],
        families: ['Font1', 'Font2']
      }
    });

Learn more about [TypeFront](http://typefront.com).

## Custom

To load fonts from any external stylesheet, use the `custom` module. Here you'll
need to specify both the url of the stylesheet as well as the font families it
provides.

    WebFont.load({
      custom: {
        families: ['My Font', 'My Other Font'],
        urls: ['/fonts.css']
      }
    });


[gfontapi]: https://code.google.com/apis/webfonts/docs/getting_started.html
[tk]: http://typekit.com/
