/**
 * Created by hou on 2017/5/19.
 */
const Router = require('./Router');
const dImg = require('../common/downloadImg');
const dHtml = require('../common/downloadHtml')
const pHtml = require('../common/parseHtml')
const dateFormat = require('../util/dateFormat')
Router.post('downloadImg', '/downloadimg', async function (ctx, next) {
    const bodyData = ctx.request.body;
    // const imageData = await dImg.image({
    //     url: bodyData.url,
    //     dest: `./public/uploads/`
    // })
    // console.log(imageData)
    dHtml(bodyData.url).then(e=>{
        const resultHtml = pHtml(e, ".post-content")
        console.log(resultHtml)
    })
});
