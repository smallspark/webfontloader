var TypeFrontTest = TestCase('TypeFrontTest');

TypeFrontTest.prototype.testCallOnReady = function() {
  var inserts = [];
  var links = [];
  var fakeDomHelper = {
      insertInto: function(tag, e) {
        inserts.push(tag);
      },
      createCssLink: function(csslink) {
        links.push(csslink);
      }
  };
  var userAgent = new webfont.UserAgent("Test", "1.0", true);
  var typeFront = new webfont.TypeFront(userAgent, fakeDomHelper, { 
    ids: [1, 2],
    families: ['Font1', 'Font2']
  });

  var families = null;
  var descriptions = null;

  typeFront.load(function(fontFamilies, fontDescriptions) {
      families = fontFamilies;
      descriptions = fontDescriptions;
  });

  assertEquals(['head', 'head'], inserts);
  assertEquals(['http://typefront.com/fonts/1.css', 'http://typefront.com/fonts/2.css'], links);
};
