/**
 * Created by zhengguorong on 16/11/2.
 * 用户权限认证方法
 *
 *  * Q&A
 * 为什么要使用composable-middleware,为了解决什么问题?
 *     他的作用是合并两个中间件,让其不需要在挂在在express实例上,例如expressJwt中间件是在执行后操作req对象,在req对象
 *     上加入user对象,但该中间件未提供回调方法,无法在验证后执行我们的代码,因此需要使用composable插件来完成两个中间件的
 *     合并.
 *     当然,你也可以像官方提供示例一样,router.get('/',jwtvalidate,function(req,res,next){req.user})获取结果,但是
 *     我的路由第三个参数主要执行数据库相关操作,不想引入验证逻辑,所以在第二个参数这里完成权限的认证.
 *
 */

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/config.js');
const compose = require('composable-middleware');
var log4js=require('../log4js/logger.js');

const validateJwt = expressJwt({
    secret: config.session.secret
})

module.exports.isAuthenticated = () => {
    return compose()
        .use(function (req, res, next) {
            log4js.info(JSON.stringify(req.headers));
            // allow access_token to be passed through query parameter as well
            if (req.query && req.query.hasOwnProperty('access_token')) {
                req.headers.authorization = `Bearer ${req.query.access_token}`;
            }
            if(req.body && req.body.hasOwnProperty('access_token')) {
                req.headers.authorization = `Bearer ${req.body.access_token}`;
            }
            // IE11 forgets to set Authorization header sometimes. Pull from cookie instead.
            if (req.query && typeof req.headers.authorization === 'undefined') {
                req.headers.authorization = `Bearer ${req.cookies.token}`;
            }
            //验证是否服务端生成的token
            var token = req.headers.authorization.split('Bearer')[1];
            log4js.info("【token-token："+token+"】");
            //验证token是否过期
            validateJwt(req, res, next);

        })
        // Attach user to request
        .use(function (req, res, next) {
            //return res.status(200).end();
            next();
        });
}

module.exports.hasRole = (roleRequired) => {
    if (!roleRequired) {
        throw new Error('必须输入身份名称');
    }

    return compose()
        .use(this.isAuthenticated())
        .use(function meetsRequirements(req, res, next) {
            return next();
            //return res.status(403).send('没有访问权限');
        });
}

module.exports.signToken = (id, role) => {
    return jwt.sign({_id: id, role}, config.session.secret, {
        expiresIn: 60 * 60 * 5 // 过期时间 表示5小时过期
    })
}