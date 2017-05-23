/**
 * Created by hou on 2017/5/19.
 */
const Router = require('./Router')
const userQuery = require('../query/user')
Router.post('register', '/register',async function (ctx, next) {
    const bodyData = ctx.request.body;
    let responseData;
    let isHave = await userQuery.count({
        username: bodyData.username
    })
    if(isHave === 0) {
        try {
            responseData = await userQuery.add(bodyData);
        } catch (error) {
            responseData = error
        }
    } else {
        responseData = {
            code: 1,
            message: '用户已经存在'
        }
    }
    ctx.body = responseData
});