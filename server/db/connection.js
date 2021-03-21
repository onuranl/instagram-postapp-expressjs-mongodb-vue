const monk = require('monk')
const connectionString = process.env.PORT || 'localhost/postboard'
const db = monk(connectionString)

module.exports = db