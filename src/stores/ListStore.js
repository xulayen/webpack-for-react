var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
    items: {reply:"-1",systemcode:"0000",accode:"0000000000000000",pathto:"",queryid:"-1"},

    getAll: function () {
      var _result=localStorage.getItem("SubmitResult");
      return _result?JSON.parse(_result):this.items;
    },

    resetReply: function (reply,systemcode,accode,pathto,queryid) {
      this.items.reply=reply;
      this.items.systemcode=systemcode;
      this.items.accode=accode.replace(/(?!^)(?=(?:\w{4})+$)/g, " ");
      this.items.pathto=pathto;
      this.items.queryid=queryid;
      localStorage.setItem("SubmitResult",JSON.stringify(this.items));
    },

    emitChange: function () {
      this.emit('change');
    },

    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    }
});

module.exports = ListStore;
