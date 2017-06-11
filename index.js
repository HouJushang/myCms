/**
 * Created by hou on 2017/5/17.
 */
const app = require('./bin/app')
//上线注释
// const cors = require('koa-cors');
// app.use(cors())

//template
const views = require('koa-views');
app.use(views(__dirname + '/template', { map: {njk: 'nunjucks' },extension: 'njk' }));

//static
const serve = require('koa-static');
app.use(serve(__dirname + '/public'));

//session
const session = require('koa-session');
app.keys = ['houjushangssecret'];
app.use(session(app))

//body
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//router
const Router = require('./router/Router')
require('./router/')
app
    .use(Router.routes())
    .use(Router.allowedMethods());