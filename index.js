require('dotenv').config()
var moment = require('moment')

console.log(moment().format("M/D/YYYY h:m A"))

console.log(process.env.API_KEY)