var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore.js');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'SUBMIT_FW_CODE':
      ListStore.resetReply(action.reply,action.systemcode,action.accode,action.pathto,action.queryid);
      ListStore.emitChange();
      break;
    case 'CHANGE_LANGUAGE':
      ListStore.changeLan(action.lan);
      ListStore.emitChange();
      break;
    case 'CHANGE_COUNTRY':
      ListStore.changeCountry(action.country);
      ListStore.emitChange();
      break;
    default:
    // no op
  }
})

module.exports = AppDispatcher;
