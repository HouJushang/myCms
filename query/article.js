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
function findAndCountAll() {
    return articleModel.findAndCountAll({

    })
}
module.exports = {
    count,
    add,
    findOne,
    findAndCountAll
}