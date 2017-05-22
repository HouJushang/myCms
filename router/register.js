/**
 * Created by hou on 2017/5/19.
 */
const Router = require('./Router')
const userQuery = require('../query/user')
Router.post('register', '/register',function (ctx, next) {
    const bodyData = ctx.request.body
    var responseData = async function () {
        await userQuery.count({
            username: bodyData.username
        }).then(e => {
            if (e === 0) {
                userQuery.add(bodyData).then(e => {
                    responseData = '添加成功'
                }).catch(e => {
                    responseData = '添加失败'
                })
            } else {
                responseData = '已经存在'
            }
        }).catch(e => {
            console.log(3333,e)
        })
    };

    ctx.body = await responseData
});