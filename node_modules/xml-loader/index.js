/*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Kevin Gisi @cheerskevin
*/

var loaderUtils = require('loader-utils');
var parseString = require('xml2js').parseString;
var processors = require('xml2js/lib/processors');

module.exports = function(text) {
  this.cacheable && this.cacheable();
  var options = loaderUtils.getOptions(this);

  if(options) {
    Object.keys(options).forEach(function(key) {
      if (key.indexOf('Processors') > -1) {
        var array = options[key];
        for (var i = 0, len = array.length; i < len; i++) {
          array[i] = processors[array[i]];
        }
      }
    });
  }

  var self = this;
  parseString(text, options, function(err, result) {
    self.callback(err, !err && "module.exports = " + JSON.stringify(result));
  });
};
