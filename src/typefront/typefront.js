webfont.TypeFront = function(userAgent, domHelper, configuration) {
  this.userAgent_ = userAgent;
  this.domHelper_ = domHelper;
  this.configuration_ = configuration;
};

webfont.TypeFront.NAME = 'typefront';
webfont.TypeFront.BASE_URL = 'http://typefront.com/fonts/';

webfont.TypeFront.prototype.cssUrl = function(id) {
  return webfont.TypeFront.BASE_URL + id + '.css';
}

webfont.TypeFront.prototype.supportUserAgent = function(userAgent, support) {
  return support(userAgent.isSupportingWebFont());
};

webfont.TypeFront.prototype.load = function(onReady) {
  var ids = this.configuration_['ids'];
  var families = this.configuration_['families'];
  var domHelper = this.domHelper_;
  var nonBlockingIe = this.userAgent_.getName() == 'MSIE' &&
      this.configuration_['blocking'] != true;

  for (var i = 0; i < ids.length; i++) {
    if (nonBlockingIe) {
      domHelper.whenBodyExists(function() {
        domHelper.insertInto('head', domHelper.createCssLink(this.cssUrl(ids[i])));
      });
    } else {
      domHelper.insertInto('head', domHelper.createCssLink(this.cssUrl(ids[i])));
    }
  }

  onReady(families);
};

WebFont.addModule(webfont.TypeFront.NAME, function(configuration) {
  var userAgentParser = new webfont.UserAgentParser(navigator.userAgent);
  var userAgent = userAgentParser.parse();
  return new webfont.TypeFront(userAgent, new webfont.DomHelper(document), configuration);
});
