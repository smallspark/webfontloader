/**
 *
 * WebFont.load({
 *   ascender: {
 *     cssKey:'e8e3d05f-2a8b-4835-8889-7b8bb3351c61',
 *     families:['AndyBold:bold']
 *   }
 * });
 *
 */
webfont.AscenderScript = function(domHelper, configuration) {
  this.domHelper_ = domHelper;
  this.configuration_ = configuration;
};

webfont.AscenderScript.NAME = 'ascender';

webfont.AscenderScript.VARIATIONS = {
  'regular': 'n4',
  'bold': 'n7',
  'italic': 'i4',
  'bolditalic': 'i7',
  'r': 'n4',
  'b': 'n7',
  'i': 'i4',
  'bi': 'i7'
};

webfont.AscenderScript.prototype.supportUserAgent = function(userAgent, support) {
  return support(userAgent.isSupportingWebFont());
};

webfont.AscenderScript.prototype.load = function(onReady) {
  var cssKey = this.configuration_.cssKey;
  var protocol = (('https:' == document.location.protocol) ? 'https:' : 'http:');
  var url = protocol + '//webfonts.fontslive.com/css/' + cssKey + '.css';
  this.domHelper_.insertInto('head', this.domHelper_.createCssLink(url));
  var fv = this.parseFamiliesAndVariations(this.configuration_.families);
  onReady(fv.families, fv.variations);
};

webfont.AscenderScript.prototype.parseFamiliesAndVariations = function(providedFamilies){
  var families, variations, fv;
  families = [];
  variations = {};
  for(var i = 0, len = providedFamilies.length; i < len; i++){
    fv = this.parseFamilyAndVariations(providedFamilies[i]);
    families.push(fv.family);
    variations[fv.family] = fv.variations;
  }
  return { families:families, variations:variations };
};

webfont.AscenderScript.prototype.parseFamilyAndVariations = function(providedFamily){
  var family, variations, parts;
  parts = providedFamily.split(':');
  family = parts[0];
  variations = [];
  if(parts[1]){
    variations = this.parseVariations(parts[1]);
  }else{
    variations = ['n4'];
  }
  return { family:family, variations:variations };
};

webfont.AscenderScript.prototype.parseVariations = function(source){
  var providedVariations = source.split(',');
  var variations = [];
  for(var i = 0, len = providedVariations.length; i < len; i++){
    var pv = providedVariations[i];
    if(pv){
      var v = webfont.AscenderScript.VARIATIONS[pv];
      variations.push(v ? v : pv);
    }
  }
  return variations;
};

WebFont.addModule(webfont.AscenderScript.NAME, function(configuration) {
  return new webfont.AscenderScript(new webfont.DomHelper(document),
      configuration);
});
