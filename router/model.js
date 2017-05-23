/**
 * Created by hou on 2017/5/19.
 */
const Router = require('./Router')
const modelQuery = require('../query/model')
Router.post('addModel', '/addmodel',async function (ctx, next) {
    const bodyData = ctx.request.body;
    let addDetail = await modelQuery.add(bodyData),responseData;
    console.log(addDetail);
    // ctx.body = responseData
});