/**
 * Created by hou on 2017/5/23.
 */
const categoryModel = require('../model/category')
function count(where){
    return categoryModel.count({
        where: where
    })
}
function add(data){
    return categoryModel.create(data)
}
function findOne(data){
    return categoryModel.findOne({
        where: data
    })
}
module.exports = {
    count,
    add,
    findOne,
}