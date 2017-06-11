/**
 * Created by hou on 2017/6/7.
 */
const Router = require('./Router')
const catModel = require('../model/category')
const host = require('../config/website').host
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
    bodyData.caturl = `${host}/${bodyData.folder}/${[,'category.html','list_1.html'][bodyData.showtype]}`
    const resultData = await catModel.create(bodyData)
    ctx.body  = {
        code: 0,
        data: resultData,
        message: '添加成功'
    }
});