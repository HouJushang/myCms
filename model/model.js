/**
 * Created by hou on 2017/5/23.
 */
const Sequelize = require('sequelize')
const sequelize = require('./Sequelize')
var model = sequelize.define('model', {
    name: {
        type: Sequelize.STRING
    },
    table: {
        type: Sequelize.STRING
    },
    templete: {
        type: Sequelize.STRING
    },
    config: {
        type: Sequelize.TEXT
    }
}, {
    freezeTableName: true
});
module.exports = model