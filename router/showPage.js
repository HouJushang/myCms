/**
 * Created by hou on 2017/6/7.
 */
const Router = require('./Router')
Router.get('index', '/',async function (ctx, next) {
    await ctx.render('default/index', {
        title: '首页'
    });
});