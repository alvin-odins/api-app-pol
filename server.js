const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const PORT = 2022
require('dotenv').config()

const db_STRING = process.env.DB_STRING


MongoClient.connect(db_STRING, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('')
        
        const quotesCollection = db.collection('')
        


        // middleware
        app.use(bodyParser.urlencoded({ extended: true }))
        
        app.set('view engine', 'ejs')
        
        app.use(express.static('public'))
        
        app.use(bodyParser.json())
       



        // routes
        
        app.get('/', (request, response) => {
          response.render('index.ejs')
          .catch(error => console.log(error))
        })





          app.listen( process.env.PORT || PORT, (  ) => {
            console.log( `live on port ${PORT}` )
          } )

    })
    .catch(error => console.log(error))