const mongoose = require('mongoose')
require('dotenv/config')

mongoose.connect(process.env.DB_CONNECTION)
let db = mongoose.connection
db.on('error', () => {
    console.error.bind(console, 'Database Connection Failed')
})
db.once('open', () => {
    console.log('Database is Connected')
})

module.exports = db