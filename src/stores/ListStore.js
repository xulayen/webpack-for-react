var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
    items: {reply:"-1",systemcode:"0000",accode:"0000000000000000",pathto:"",queryid:"-1",lan:"zh-CN"},

    getAll: function () {
      var _result=localStorage.getItem("SubmitResult");
      return _result?JSON.parse(_result):this.items;
    },

    getCurrentLan:function(){
      var _result=localStorage.getItem("CurrentLan");
      if(!_result){
        _result=navigator.language;
      }
      return _result;
    },

    getCurrentCountry:function(){
      var _result=localStorage.getItem("CurrentCountry");
      if(!_result){
        _result=navigator.language.split('-')[1];
      }
      return _result;
    },

    resetReply: function (reply,systemcode,accode,pathto,queryid) {
      this.items.reply=reply;
      this.items.systemcode=systemcode;
      this.items.accode=accode.replace(/(?!^)(?=(?:\w{4})+$)/g, " ");
      this.items.pathto=pathto;
      this.items.queryid=queryid;
      localStorage.setItem("SubmitResult",JSON.stringify(this.items));
    },


    changeLan:function(lan){
      localStorage.setItem("CurrentLan",lan);
    },

    changeCountry:function(country){
      localStorage.setItem("CurrentCountry",country);
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
