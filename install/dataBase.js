/**
 * Created by hou on 2017/5/22.
 */
const userTable = require('../model/user')
const tagTable = require('../model/tag')
const categoryTable = require('../model/category')
const articleTable = require('../model/article')
const model_articleTable = require('../model/model_article')
userTable.sync()
tagTable.sync()
categoryTable.sync()
articleTable.sync()
model_articleTable.sync()