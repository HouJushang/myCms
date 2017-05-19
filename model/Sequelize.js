/**
 * Created by hou on 2017/5/19.
 */
const Sequelize = require('sequelize')
var sequelize = new Sequelize('mycms', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports = sequelize