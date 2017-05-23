/**
 * Created by hou on 2017/5/23.
 */
const tagModel = require('../model/tag')
function count(where){
    return tagModel.count({
        where: where
    })
}
function add(data){
    return tagModel.create(data)
}
function findOne(data){
    return tagModel.findOne({
        where: data
    })
}
module.exports = {
    count,
    add,
    findOne,
}