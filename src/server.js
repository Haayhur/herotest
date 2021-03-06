const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes') // includes the routes.js file
const cors = require('cors') // includes cors module

require('dotenv').config()

app.use(cors()) // We're telling express to use CORS
app.use(express.json()) // we need to tell server to use json as well
app.use(routes) // tells the server to use the routes in routes.js


var config = require('./config');
const url = config.mongoUrl;
const connect = mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true});

connect.then((db) => {
  console.log('Connected to server');
}, (err) => {console.log(err);});

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('database connected'))\
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The api is running... ${port}!`));

// app.listen(80, () => {
//     console.log("The api is running...")
// })