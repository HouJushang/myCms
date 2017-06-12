/**
 * Created by hou on 2017/6/8.
 */
const Router = require('./Router')
const artModel = require('../model/article')
const catModel = require('../model/category')
const tmpRender = require('../common/tmpRender')

Router.post('doPass', '/dopass',async function (ctx, next) {
    const bodyData = ctx.request.body;
    const artData = await artModel.findOne({id: bodyData.id});
    const catData = await catModel.findOne({id: artData.categoryId})

    //发布生成html
    tmpRender(catData.atricle_tmp, artData, `catData.folder/${artData.id}.html`)
    return
    // 发布成功更改状态
    const result = await artModel.update({status: 1},{
        where: {
            id: bodyData.id
        }
    })
    ctx.body = {
        code: 0,
        data: result
    }
});