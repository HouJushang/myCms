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
        default: 0
    },
    addtime: {
        type: Sequelize.DATE
    },
    updatetime: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: true
});
module.exports = Article