/**
 * Created by hou on 2017/5/19.
 */
const Sequelize = require('sequelize')
const config = require('../config/database')
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports = sequelize