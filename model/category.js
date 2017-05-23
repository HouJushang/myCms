/**
 * Created by hou on 2017/5/19.
 */
const Sequelize = require('sequelize')
const sequelize = require('./Sequelize')
var Category = sequelize.define('category', {
    title: {
        type: Sequelize.STRING
    },
    template_index: {
        type: Sequelize.STRING
    },
    template_list: {
        type: Sequelize.STRING
    },
    template_content: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.INTEGER,
    }
}, {
    freezeTableName: true
});
module.exports = Category