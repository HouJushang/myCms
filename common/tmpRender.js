const njk = require('nunjucks')
const tmpPath = require('../config/website').tmpPath
const pubPath = require('../config/website').pubPath
const fs = require('fs')
const path = require('path')
/**
 * @param tmp 模板路径
 * @param tmpData 模板数据
 * @param htmlPath html路径
 * @returns {*|String} 返回html
 */
function render(tmp, tmpData, htmlPath, filename) {
    tmpData.tmpPath = tmpPath
    var env = new njk.Environment(new njk.FileSystemLoader(tmpPath));
    var result = env.render(tmp, tmpData)
    var htmlFolder = path.join(pubPath, htmlPath)
    var htmlFile = path.join(htmlFolder, filename)
    try {
        if(!fs.existsSync(htmlFolder)){
            fs.mkdirSync(htmlFolder)
        }
        fs.writeFileSync(htmlFile, result);
        return {
            status: 1,
            message: '成功'
        }
    } catch (err) {
        return {
            status: 0,
            message: err
        }
    }

}
module.exports = render