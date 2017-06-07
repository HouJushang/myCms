/**
 * Created by hou on 2017/6/7.
 */
const Router = require('./Router')
const catModel = require('../model/category')
Router.post('category', '/category',async function (ctx, next) {
    const resultData = await catModel.findAll()
    ctx.body  = {
        code: 0,
        data: resultData,
        message: '查询所有栏目成功'
    }
});
Router.post('addCategory', '/addcategory',async function (ctx, next) {
    const bodyData = ctx.request.body
    const resultData = await catModel.create(bodyData)
    ctx.body  = {
        code: 0,
        data: resultData,
        message: '添加成功'
    }
});