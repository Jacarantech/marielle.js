const credentials = require('../../settings/database.json')
const Sequelize = require('sequelize')
const path = require('path')
const db = {}

const sequelize = new Sequelize(
  credentials.database,
  credentials.username,
  credentials.password,
  credentials
)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
