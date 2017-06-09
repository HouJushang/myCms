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
        type: Sequelize.STRING,
        defaultValue: 0
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
    from: {
        type: Sequelize.STRING,
        defaultValue: '未知'
    },
    fromurl: {
        type: Sequelize.TEXT
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
        defaultValue: 0 // 0 未审核 1 审核通过（发布）2 回收站
    }
}, {
    freezeTableName: true
});
module.exports = Article