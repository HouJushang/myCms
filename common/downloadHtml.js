/**
 * Created by hou on 2017/5/26.
 */
const request = require('request')
module.exports = function (url) {
    return new Promise((resolve, reject) => {
        request({
            url : url,
            method : 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
            }
        },function(err, red, body) {
            //请求到body
            if(err){
                console.error('downloadHtml-' + err);
                reject(err)
                return;
            }
            resolve(body)
        })
    })
}