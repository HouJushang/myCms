/**
 * Created by hou on 2017/6/7.
 */
const Router = require('./Router')
const catModel = require('../model/category')
const tmpPath = require('../config/website').tmpPath
Router.get('index', '/',async function (ctx, next) {
    //查询一级分类
    const catData = await catModel.findAll()
    await ctx.render('index', {
        title: '首页',
        tmpPath: tmpPath,
        catData: catData
    });
});