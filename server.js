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
app.set('view engine', 'ejs')
app.use(express.static('public'))



// routes
app.get( '/', ( request, response ) => {
  collection.find().toArray()
            .then(results => { 
              response.render('index.ejs', { leaders: results })
              console.log(results)
             })
             .catch(error => console.log(error))
} )

app.post('/pol', ( request, response ) => { 
  collection.insertOne(request.body)
   .then(result => {
     response.redirect('/')
   })
   .catch(error => console.log(error))
 } )

 


app.listen( process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it`);
} )