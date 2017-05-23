/**
 * Created by hou on 2017/5/19.
 */
const userModel = require('../model/user')
function count(where){
    return userModel.count({
        where: where
    })
}
function add(data){
    return userModel.create(data)
}
function findOne(data){
    return userModel.findOne({
        where: data
    })
}
module.exports = {
    count,
    add,
    findOne,
}