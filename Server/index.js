const express = require('express')
const app = express()
const UserRoutes = require('./Routes/user.js')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./Config/db')
require('dotenv/config')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

app.use('/user', UserRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server Connected To http://localhost:${process.env.PORT}`)
})