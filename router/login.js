/**
 * Created by hou on 2017/5/19.
 */
const Router = require('./Router')
const userQuery = require('../query/user')
Router.post('login', '/login',async function (ctx, next) {
    const bodyData = ctx.request.body;
    let userDetail = await userQuery.findOne(bodyData),responseData;
    if (userDetail) {
        ctx.session.user = bodyData.username
        responseData = {
            code: 0,
            data: userDetail
        }
    } else {
        responseData = {
            code: 1,
            data: '用户名或者密码错误',
        }
    }
    ctx.body = responseData
});