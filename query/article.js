/**
 * Created by hou on 2017/5/22.
 */
const articleModel = require('../model/article')
function count(where){
    return articleModel.count({
        where: where
    })
}
function add(data){
    return articleModel.create(data)
}
function findOne(data){
    return articleModel.findOne({
        where: data
    })
}
function findAndCountAll(data) {
    return articleModel.findAndCountAll({
        limit: Number(data.limit),
        offset: Number(data.offset)
    })
}
module.exports = {
    count,
    add,
    findOne,
    findAndCountAll
}