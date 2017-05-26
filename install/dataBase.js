/**
 * Created by hou on 2017/5/22.
 */
const userTable = require('../model/user')
const tagTable = require('../model/tag')
const categoryTable = require('../model/category')
const articleTable = require('../model/article')
userTable.sync()
tagTable.sync()
categoryTable.sync()
articleTable.sync()
