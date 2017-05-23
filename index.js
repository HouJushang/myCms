/**
 * Created by hou on 2017/5/17.
 */
const Koa = require('koa');
const app = new Koa();

const session = require('koa-session');
app.keys = ['houjushangssecret'];
app.use(session(app))

var bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const Router = require('./router/Router')
require('./router/main')

app
    .use(Router.routes())
    .use(Router.allowedMethods());

app.listen(5000);
