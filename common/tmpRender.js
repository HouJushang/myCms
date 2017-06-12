const njk = require('nunjucks')
const tmpPath = require('../config/website').tmpPath
const fs = require('fs')
/**
 * @param tmp 模板路径
 * @param tmpData 模板数据
 * @param htmlPath html路径
 * @returns {*|String} 返回html
 */
function render(tmp, tmpData, htmlPath) {
    tmpData.tmpPath = tmpPath
    var env = new njk.Environment(new njk.FileSystemLoader(tmpPath));
    var result = env.render(tmp, tmpData)

    fs.createWriteStream(htmlPath)
    fs.writeFile(htmlPath, result, function(err) {
        if(err) {
            return 'fail';
        }
        return 'ok'
    });
}
module.exports = render