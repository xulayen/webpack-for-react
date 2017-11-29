var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore.js');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'SUBMIT_FW_CODE':
      ListStore.resetReply(action.reply,action.systemcode,action.accode,action.pathto);
      ListStore.emitChange();
      break;
    default:
    // no op
  }
})

module.exports = AppDispatcher;
