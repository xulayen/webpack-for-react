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


  changeLan: function (lan) {
    AppDispatcher.dispatch({
      actionType: 'CHANGE_LANGUAGE',
      lan: lan
    });
  },

  changeCountry: function (country) {
    AppDispatcher.dispatch({
      actionType: 'CHANGE_COUNTRY',
      country: country
    });
  },

};

module.exports = ButtonActions;
