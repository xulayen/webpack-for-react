# Webpack XML loader

A Webpack plugin for loading XML files.

## Installation

Install via npm:

```
npm install --save xml-loader
```

## Usage

You can require XML data like this:

``` javascript
var data = require('xml!./data.xml');
// => returns data.xml content as json-parsed object

var data = require('xml?explicitChildren=true!./data.xml');
// => returns data.xml content as json-parsed object and put child elements to separate properties
```

The loader will translate the ```data.xml``` file into a JSON Object. [node-xml2js processors](https://github.com/Leonidas-from-XIV/node-xml2js#options) are supported via query syntax.

#### Usage with webpack.config

To require XML files like this: ```require('data.xml')``` , you can add the xml-loader to your webpack config:

``` javascript
module : {
  loaders : [
    { test: /\.xml$/, loader: 'xml-loader' } // will load all .xml files with xml-loader by default
  ]
}
```

## Credits

* Inspired by webpack's [dsv-loader](https://github.com/wbkd/dsv-loader)
* XML parsing done with [node-xml2js](https://github.com/Leonidas-from-XIV/node-xml2js)
