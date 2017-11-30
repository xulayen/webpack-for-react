var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {

  submitFwCode: function (reply,systemcode,accode,pathto,queryid) {
    AppDispatcher.dispatch({
      actionType: 'SUBMIT_FW_CODE',
      reply: reply,
      systemcode:systemcode,
      accode:accode,
      pathto:pathto,
      queryid:queryid
    });
  },
};

module.exports = ButtonActions;
