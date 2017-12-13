

    let config={
        url:'http://temp2.zhsh.co/OutAcCodeService.asmx?wsdl',
        token:'M1q8G3yEF0',
        userID:'092KSO3LD82JS99S03KJAKQ891KD9',
        userPwd:'5A2E8D2G2Q2CDOIIKK9SLDKAJIS3S',
        language:'en-us',
        channel:'10',
        channeltype:'W',
        country:'CN',

        port:8011,
        log4js:{ 
            type: "dateFile", 
            filename:'E:/AllLog/nodejs/logs/log',
            alwaysIncludePattern: true,
            pattern: "-yyyy-MM-dd.log",
            category:"log_date",
            encoding : 'utf-8'//default "utf-8"，文件的编码
        },

        session: {
            secret: 'shellac',
            key: 'shellac',
            maxAge: 2592000000
        },
        mongodb: 'http://localhost:8011'
    }

    module.exports=config;