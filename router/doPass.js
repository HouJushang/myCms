/**
 * Created by hou on 2017/6/8.
 */
const Router = require('./Router')
const artModel = require('../model/article')
Router.post('doPass', '/dopass',async function (ctx, next) {
    const bodyData = ctx.request.body;
    const artData = await artModel.findOne({id: bodyData.id});
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