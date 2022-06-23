const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')

require('dotenv').config()
const PORT = 8000

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'pol',
    collection

MongoClient.connect(dbConnectionStr)
  .then(client => {
      console.log(`connected to database`)
      db = client.db(dbName)
      collection = db.collection('pol')
  })


// middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())



// routes
app.get( '/', ( request, response ) => {
  response.render( 'index.ejs' )
} )


app.listen( process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it`);
} )