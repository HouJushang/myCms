/**
 * Created by hou on 2017/5/23.
 */
const modelModel = require('../model/model')
function count(where){
    return modelModel.count({
        where: where
    })
}
function add(data){
    return modelModel.create(data)
}
function findOne(data){
    return modelModel.findOne({
        where: data
    })
}
module.exports = {
    count,
    add,
    findOne,
}