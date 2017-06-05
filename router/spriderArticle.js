/**
 * Created by hou on 2017/6/5.
 */
const Router = require('./Router')
const spriderArticleQuery = require('../query/spriderArticle')
Router.get('spriderArticle','/spriderarticle', async function (ctx, next) {
    const bodyData = ctx.request.query;
    var findData = await spriderArticleQuery.findAndCountAll(bodyData)
    ctx.body = {
        code: 0,
        data: findData
    }
})