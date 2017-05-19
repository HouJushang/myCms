/**
 * Created by hou on 2017/5/19.
 */
const Router = require('./Router')
const User = require('../model/user')
Router.post('register', '/register',function (ctx, next) {
    const bodyData = ctx.request.body
    User.sync().then(function () {
    return User.create(bodyData);
});
    ctx.body = 'Hello World!'
});