var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {

  submitFwCode: function (reply,systemcode,accode,pathto) {
    AppDispatcher.dispatch({
      actionType: 'SUBMIT_FW_CODE',
      reply: reply,
      systemcode:systemcode,
      accode:accode,
      pathto:pathto
    });
  },

};

module.exports = ButtonActions;
