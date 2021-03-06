/**
 * Created by hou on 2017/5/23.
 */
const Router = require('./Router')
const articleModel = require('../model/article')
const articleQuery = require('../query/article')
Router.post('addArticle', '/addarticle', async function (ctx, next) {
    const bodyData = ctx.request.body
    const finStatus = await articleQuery.findOne({title: bodyData.title})
    if (finStatus) {
        ctx.body = {
            code: 1,
            message: '已经存在，添加失败'
        }
        return
    }
    const addStatus = await articleQuery.add(bodyData)
    if (addStatus.id) {
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
Router.post('article','/article', async function (ctx, next) {
    const bodyData = ctx.request.body;
    console.log(bodyData.where)
    var findData = await articleModel.findAndCountAll(bodyData)
    ctx.body = {
        code: 0,
        data: findData
    }
})