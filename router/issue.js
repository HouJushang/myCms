/**
 * Created by hou on 2017/6/8.
 */
const Router = require('./Router')
const tmpArtModel = require('../model/tmparticle')
const artModel = require('../model/article')
Router.post('issue', '/issue',async function (ctx, next) {
    const bodyData = ctx.request.body;
    const artdata = await tmpArtModel.findOne({
        where: {
            id: bodyData.id
        }
    })
    addData = {
        title: artdata.title,
        author: 'hou',
        keywords: artdata.keywords,
        description: artdata.description,
        content: artdata.content,
        categoryId: 1,
        from: artdata.from,
        fromurl: artdata.fromurl,
        status: 0
    }
    const addResult = await artModel.create(addData)
    ctx.body = {
        code: 0,
        data: addResult,
        message: '添加成功'
    }
});