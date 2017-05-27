/**
 * Created by hou on 2017/5/27.
 */
const cheerio = require('cheerio')
module.exports = function (urlLink) {
    let $ = cheerio.load(cheerio.load(htmlString)(contentSelect).html())
    return  $.html()
}