/**
 * Created by hou on 2017/5/17.
 */
const Koa = require('koa');
const app = new Koa();

var bodyParser = require('koa-bodyparser');
app.use(bodyParser());

require('./router/main')
const Router = require('./router/Router')
app
    .use(Router.routes())
    .use(Router.allowedMethods());

app.listen(5000);
