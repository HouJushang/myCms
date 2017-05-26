/**
 * Created by hou on 2017/5/19.
 */
const Router = require('./Router')
const { uploadFile } = require('../common/upload')
const path = require('path')
const dateFormat = require('../util/dateFormat')

Router.post('upload', '/upload',async function (ctx, next) {
    let serverFilePath = path.join( __dirname, `../public/uploads/${dateFormat(new Date(), 'yyyy-MM')}` )
    const result = await uploadFile( ctx, serverFilePath)
    ctx.body = result
});