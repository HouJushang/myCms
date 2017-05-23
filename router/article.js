/**
 * Created by hou on 2017/5/23.
 */
const Router = require('./Router')
const articleQuery = require('../query/article')
Router.post('addArticle', '/article/add', async function (ctx, next) {
    const bodyData = ctx.request.body
    const addStatus = await articleQuery.add(bodyData)
    if (addStatus) {
        ctx.body = {
            code: 0,
            message: '添加成功'
        }
    } else {
        ctx.body = {
            code: 1,
            message: '添加失败'
        }
    }
})