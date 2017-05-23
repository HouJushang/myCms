/**
 * Created by hou on 2017/5/19.
 */
const Sequelize = require('sequelize')
const sequelize = require('./Sequelize')
var Tag = sequelize.define('tag', {
    name: {
        type: Sequelize.STRING
    },
    number: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true
});
module.exports = Tag