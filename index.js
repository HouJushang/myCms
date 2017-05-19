/**
 * Created by hou on 2017/5/17.
 */
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')();
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());

Router.get('index', '/',function (ctx, next) {
    ctx.body = 'Hello World!'
});
Router.post('register', '/register',function (ctx, next) {
    console.log(ctx.request.body)
    ctx.body = 'Hello World!'
});
app
    .use(Router.routes())
    .use(Router.allowedMethods());

app.listen(5000);
