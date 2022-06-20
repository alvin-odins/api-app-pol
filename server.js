const express = require( 'express' )
const app = express()
const MongoClient = require('mongodb').MongoClient


const PORT = 2022
require('dotenv').config()

// db connection
let db_STRING= process.env.db_STRING
MongoClient.connect(db_STRING, {useUnifiedTopology:true})
  .then(client => {
    console.log(`connected to database`)
  })

// middleware

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// routes
app.get( '/', ( request, response ) => {
  response.render( 'index.ejs' )
} )


app.listen( process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it`);
} )