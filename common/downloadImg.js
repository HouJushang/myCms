'use strict'

const request = require('request')
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const dateFormat = require('../util/dateFormat')

const onError = (err, done) => {
    if (done) {
        return done(err)
    }
    throw err
}

const downloader = ({ url, dest, done }) => {
    if (!url) {
        throw new Error('The option url is required')
    }

    if (!dest) {
        throw new Error('The option dest is required')
    }
    let toDayDate = dateFormat(new Date(), 'yyyy-MM')
    let filePath = path.join(dest, toDayDate)
    if (!fs.existsSync(filePath)){
        mkdirp(dest, function (err) {
            if (err) console.error(err)
            else console.log('pow!')
        });
    }
    request({ url: url, encoding: null, headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    } }, (err, res, body) => {
        if (err) {
            return onError(err, done)
        }

        if (body && res.statusCode === 200) {
            let baseName = path.basename(url)
            if (!path.extname(filePath)) {
                dest = path.join(filePath, baseName)
            }

            fs.writeFile(dest, body, 'binary', (err) => {
                if (err) {
                    return onError(err, done)
                }
                done && done(false, {name: baseName, date: toDayDate}, body)
            })
        } else {
            if (!body) {
                return onError(new Error('Image loading error - empty body. URL: ' + url), done)
            }
            onError(new Error('Image loading error - ' + res.statusCode + '. URL: ' + url), done)
        }
    })
}

downloader.image = ({ url, dest }) => new Promise((resolve, reject) => {
    downloader({
        url,
        dest,
        done: (err, imageData) => {
            if (err) {
                return reject(err)
            }
            resolve(imageData)
        }
    })
})

module.exports = downloader
