import ListStore from'../../stores/ListStore.js';
import zh_CN from '../zh_CN.js';
import en_US from '../en_US.js';
var Intet={
    chooseLocale:function(){
        switch(ListStore.getCurrentLan().split('-')[0]){
            case 'en':
                return en_US;
                break;
            case 'zh':
                return zh_CN;
                break;
            default:
                return en_US;
                break;
        }
    },
    locale:'en'//navigator.language.split('-')[0]
}



module.exports=Intet;
