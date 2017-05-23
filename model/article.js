/**
 * Created by hou on 2017/5/22.
 */
const Sequelize = require('sequelize')
const sequelize = require('./Sequelize')
var Article = sequelize.define('article', {
    title: {
        type: Sequelize.TEXT
    },
    author: {
        type: Sequelize.STRING
    },
    articleUrl: {
        type: Sequelize.STRING
    },
    keywords: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    content: {
        type: Sequelize.TEXT
    },
    categoryId: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    addtime: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    updatetime: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 0 // 0 未审核 1 审核通过（发布）2 发布
    }
}, {
    freezeTableName: true
});
module.exports = Article