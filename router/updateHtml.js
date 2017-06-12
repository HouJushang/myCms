/**
 * Created by hou on 2017/6/12.
 */
const Router = require('./Router')
const tmpRender = require('../common/tmpRender')
const pubPath = require('../config/website').pubPath
//更新首页
Router.post('updateIndex', '/update/index',async function (ctx, next) {
    const htmlPath = `${pubPath}index.html`
    const result = tmpRender('index.njk', {title: '1111'}, htmlPath)
});