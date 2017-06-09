/**
 * Created by hou on 2017/6/8.
 */
const Router = require('./Router')
const tmpArtModel = require('../model/tmparticle')
const artModel = require('../model/article')
Router.post('issue', '/issue',async function (ctx, next) {
    const bodyData = ctx.request.body;
    const artdata = await tmpArtModel.findAll({
        where: {
            id: {
                in: bodyData
            }
        }
    })
    let addData = []
    artdata.forEach(item => {
        addData.push({
            title: item.title,
            author: 'hou',
            keywords: item.keywords,
            description: item.description,
            content: item.content,
            categoryId: 1,
            from: item.from,
            fromurl: item.fromurl,
            status: 0
        })
    })
    const addResult = await artModel.bulkCreate(addData)
    ctx.body = {
        code: 0,
        data: addResult,
        message: '添加成功'
    }
});