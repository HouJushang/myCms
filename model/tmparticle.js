/**
 * Created by hou on 2017/5/27.
 */
/**
 * Created by hou on 2017/5/22.
 */
const Sequelize = require('sequelize')
const sequelize = require('./Sequelize')
var tmpArticle = sequelize.define('tmparticle', {
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
    isure: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    freezeTableName: true
});
module.exports = tmpArticle