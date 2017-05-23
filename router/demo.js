/**
 * Created by hou on 2017/5/22.
 */
const Router = require('./Router')
// const userQuery = require('../query/user')
Router.post('demo', '/demo',async function (ctx, next) {
    console.log(ctx.session.user)
    if(ctx.session.user){
        ctx.body = 1
    } else {
        ctx.body = 2
    }
});