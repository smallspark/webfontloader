webfont.DomHelper = function(doc, userAgent) {
  this.document_ = doc;
  this.userAgent_ = userAgent;
};

webfont.DomHelper.prototype.createElement = function(elem, opt_attr,
    opt_innerHtml) {
  var domElement = this.document_.createElement(elem);

  if (opt_attr) {
    for (var attr in opt_attr) {
      // protect against native prototype augmentations
      if (opt_attr.hasOwnProperty(attr)) {
        if (attr == "style" && this.userAgent_.getName() == "MSIE") {
          domElement.style.cssText = opt_attr[attr];
        } else {
          domElement.setAttribute(attr, opt_attr[attr]);
        }
      }
    }
  }
  if (opt_innerHtml) {
    domElement.appendChild(this.document_.createTextNode(opt_innerHtml));
  }
  return domElement;
};

webfont.DomHelper.prototype.insertInto = function(tagName, e) {
  var t = this.document_.getElementsByTagName(tagName)[0];

  if (!t) { // opera allows documents without a head
    t = document.documentElement;
  }

  if (t && t.lastChild) {
    // This is safer than appendChild in IE. appendChild causes random
    // JS errors in IE. Sometimes errors in other JS exectution, sometimes
    // complete 'This page cannot be displayed' errors. For our purposes,
    // it's equivalent because we don't need to insert at any specific
    // location.
    t.insertBefore(e, t.lastChild);
    return true;
  }
  return false;
};

webfont.DomHelper.prototype.whenBodyExists = function(callback) {
  var check = function() {
    if (document.body) {
      callback();
    } else {
      setTimeout(check, 0);
    }
  }
  check();
};

webfont.DomHelper.prototype.removeElement = function(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
    return true;
  }
  return false;
};

webfont.DomHelper.prototype.createCssLink = function(src) {
  return this.createElement('link', {
    'rel': 'stylesheet',
    'href': src
  });
};

webfont.DomHelper.prototype.createScriptSrc = function(src) {
  return this.createElement('script', {
    'src': src
  });
};

webfont.DomHelper.prototype.appendClassName = function(e, name) {
  var classes = e.className.split(/\s+/);
  for (var i = 0, len = classes.length; i < len; i++) {
    if (classes[i] == name) {
      return;
    }
  }
  classes.push(name);
  e.className = classes.join(' ').replace(/^\s+/, '');
};

webfont.DomHelper.prototype.removeClassName = function(e, name) {
  var classes = e.className.split(/\s+/);
  var remainingClasses = [];
  for (var i = 0, len = classes.length; i < len; i++) {
    if (classes[i] != name) {
      remainingClasses.push(classes[i]);
    }
  }
  e.className = remainingClasses.join(' ').replace(/^\s+/, '')
      .replace(/\s+$/, '');
};
