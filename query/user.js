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
    console.log(data)
    return userModel.create(data)
}
module.exports = {
    count,
    add
}