/**
 * Created by hou on 2017/5/22.
 */
const tmparticleModel = require('../model/tmparticle')
function count(where){
    return tmparticleModel.count({
        where: where
    })
}
function add(data){
    return tmparticleModel.create(data)
}
function findOne(data){
    return tmparticleModel.findOne({
        where: data
    })
}
function findAndCountAll(data) {
    return tmparticleModel.findAndCountAll({
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