/**
 * Created by hou on 2017/6/7.
 */
const Router = require('./Router')
const catModel = require('../model/category')
Router.post('category', '/category',async function (ctx, next) {
    const bodyData = ctx.request.body
    const resultData = await catModel.findAll(bodyData)
    ctx.body  = {
        code: 0,
        data: resultData,
        message: '查询所有栏目成功'
    }
});
// 单项详情
Router.post('categoryDetail', '/categorydetail',async function (ctx, next) {
    const catId = ctx.request.body.id
    const resultData = await catModel.findOne({
        where: {
            id: catId
        }
    })
    ctx.body  = {
        code: 0,
        data: resultData,
        message: '查询栏目成功'
    }
});
// 添加栏目
Router.post('addCategory', '/addcategory',async function (ctx, next) {
    const bodyData = ctx.request.body
    bodyData.caturl = `${bodyData.folder}/${[,'category.html','list_1.html'][bodyData.showtype]}`
    const resultData = await catModel.create(bodyData)
    ctx.body  = {
        code: 0,
        data: resultData,
        message: '添加成功'
    }
});
// 更新栏目
Router.post('updateCategory', '/updatecategory',async function (ctx, next) {
    const catData = ctx.request.body
    const catId = catData.id
    const resultData = await catModel.update(catData, {
        where: {
            id: catId
        }
    })
    ctx.body  = {
        code: 0,
        data: resultData,
        message: '修改成功'
    }
});