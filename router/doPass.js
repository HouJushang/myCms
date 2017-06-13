/**
 * Created by hou on 2017/6/8.
 */
const Router = require('./Router')
const artModel = require('../model/article')
const catModel = require('../model/category')
const tmpRender = require('../common/tmpRender')

Router.post('doPass', '/dopass',async function (ctx, next) {
    const bodyData = ctx.request.body;
    const artData = await artModel.findOne({
        where: {
            id: bodyData.id
        }
    });
    const catData = await catModel.findOne({
        where: {
            id: artData.categoryId
        }
    })
    //发布生成html
    const doResult = tmpRender(catData.atricle_tmp, artData, catData.folder, `${artData.id}.html`)

    // 发布成功更改状态
    if(doResult.status === 1){
        const result = await artModel.update({
            status: 1,
            articleUrl: `${catData.folder}/${artData.id}.html`
        },{
            where: {
                id: bodyData.id
            }
        })
        ctx.body = {
            code: 0,
            data: result
        }
    }else{
        ctx.body = {
            code: 1,
            data: doResult.message
        }
    }

});