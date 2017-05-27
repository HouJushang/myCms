/**
 * Created by hou on 2017/5/19.
 */
const Router = require('./Router')
const dHtml = require('../common/downloadHtml')
const cheerio = require('cheerio')
const tmpArticleModel = require('../model/tmparticle')
//
// function openLink(urlLink) {
//     //放到采集过得数组中
//     allUrl.push(urlLink);
//
//     let htmlString = dHtml(urlLink)
//     let $ = cheerio.load(htmlString);
//
//     $('a').each(function (idx, element) {
//         if (element.attribs.href) {
//             var newUrl = url.resolve(baseUrl, element.attribs.href);
//             var index = newUrl.indexOf(baseUrl);
//
//             //判断连接是否同一域 和 是否已经打开过
//             if (index >= 0 && allUrl.indexOf(newUrl) == -1) {
//                 openLink(newUrl);
//             }
//         }
//     })
// }
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}
/**
 * @param url
 * @param contentSelect
 * @param h1Select
 * @param from
 */
Router.post('sprider', '/sprider',async function (ctx, next) {
    const bodyData = ctx.request.body;

    let htmlString = await dHtml(bodyData.url)
    let $ = cheerio.load(htmlString,  {decodeEntities: false})
    let articleKeyWords = $("meta[name='keywords']").attr("content");
    let articleDes = $("meta[name='description']").attr("content");

    let articleTitle = $(bodyData.h1Select).text()
    let articleFrom = bodyData.from
    let articleContent = decodeUnicode($(bodyData.contentSelect).html())

    let addStatus = tmpArticleModel.create({
        title: articleTitle,
        keywords: articleKeyWords,
        description: articleDes,
        author: 'hou',
        content: articleContent,
        fromurl: bodyData.url,
        from: articleFrom
    })
    if (addStatus) {
        ctx.body = {
            code: 1,
            message: '添加成功'
        }
    }
});