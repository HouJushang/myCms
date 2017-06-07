/**
 * Created by hou on 2017/5/19.
 */
const Sequelize = require('sequelize')
const sequelize = require('./Sequelize')
var Category = sequelize.define('category', {
    name: {
        type: Sequelize.STRING
    },
    articletype: {
        type: Sequelize.INTEGER
    },
    parentid: {
        type: Sequelize.INTEGER
    },
    folder: {
        type: Sequelize.STRING
    },
    sortrank: {
        type: Sequelize.INTEGER
    },
    showtype: {
        type: Sequelize.INTEGER
    },
    bindhost: {
        type: Sequelize.INTEGER
    },
    host: {
        type: Sequelize.STRING
    },
    seotitle: {
        type: Sequelize.STRING
    },
    keywords: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    tmpstyle: {
        type: Sequelize.STRING
    },
    atricle_tmp: {
        type: Sequelize.STRING
    },
    category_tmp: {
        type: Sequelize.STRING
    },
    list_tmp: {
        type: Sequelize.STRING
    },
    artrule: {
        type: Sequelize.STRING
    },
    lisrule: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});
module.exports = Category