/**
 * Created by hou on 2017/5/19.
 */
const Sequelize = require('sequelize')
const sequelize = require('./Sequelize')
var User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    roleid: {
        type: Sequelize.INTEGER,
        default: 0
    }
}, {
    freezeTableName: true
});
module.exports = User