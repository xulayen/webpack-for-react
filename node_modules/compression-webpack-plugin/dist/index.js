'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     MIT License http://www.opensource.org/licenses/mit-license.php
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Author Tobias Koppers @sokra
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _RawSource = require('webpack-sources/lib/RawSource');

var _RawSource2 = _interopRequireDefault(_RawSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CompressionPlugin = function () {
  function CompressionPlugin() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CompressionPlugin);

    this.asset = options.asset || '[path].gz[query]';
    this.algorithm = options.algorithm || 'gzip';
    this.filename = options.filename || false;
    this.compressionOptions = {};

    if (typeof this.algorithm === 'string') {
      var zlib = require('zlib');
      this.algorithm = zlib[this.algorithm];

      if (!this.algorithm) {
        throw new Error('Algorithm not found in zlib');
      }

      this.compressionOptions = {
        level: options.level || 9,
        flush: options.flush,
        chunkSize: options.chunkSize,
        windowBits: options.windowBits,
        memLevel: options.memLevel,
        strategy: options.strategy,
        dictionary: options.dictionary
      };
    }
    this.test = options.test || options.regExp;
    this.threshold = options.threshold || 0;
    this.minRatio = options.minRatio || 0.8;
    this.deleteOriginalAssets = options.deleteOriginalAssets || false;
  }

  _createClass(CompressionPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      compiler.plugin('emit', function (compilation, callback) {
        var assets = compilation.assets;
        _async2.default.forEach(Object.keys(assets), function (file, cb) {
          if (Array.isArray(_this.test)) {
            if (_this.test.every(function (t) {
              return !t.test(file);
            })) {
              return cb();
            }
          } else if (_this.test && !_this.test.test(file)) {
            return cb();
          }
          var asset = assets[file];
          var content = asset.source();

          if (!Buffer.isBuffer(content)) {
            content = new Buffer(content, 'utf-8');
          }

          var originalSize = content.length;

          if (originalSize < _this.threshold) {
            return cb();
          }

          _this.algorithm(content, _this.compressionOptions, function (err, result) {
            if (err) {
              return cb(err);
            }

            if (result.length / originalSize > _this.minRatio) {
              return cb();
            }

            var parse = _url2.default.parse(file);
            var sub = {
              file,
              path: parse.pathname,
              query: parse.query || ''
            };

            var newFile = _this.asset.replace(/\[(file|path|query)\]/g, function (p0, p1) {
              return sub[p1];
            });

            if (typeof _this.filename === 'function') {
              newFile = _this.filename(newFile);
            }
            assets[newFile] = new _RawSource2.default(result);
            if (_this.deleteOriginalAssets) {
              delete assets[file];
            }
            cb();
          });
        }, callback);
      });
    }
  }]);

  return CompressionPlugin;
}();

exports.default = CompressionPlugin;