const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
//This was the initial json array of leaders that i pushed to the database
const Leaders = require("./Model/leaders");

require("dotenv").config();
const PORT = 8000;

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "pol",
  collection;

MongoClient.connect(dbConnectionStr).then((client) => {
  console.log(`connected to database`);
  db = client.db(dbName);
  collection = db.collection("leaders");
});

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get("/", (request, response) => {
  response.render("index.ejs");
});

//post request to add a new leader
app.post("/leaders", async (req, res) => {
  const leader = req.body;
  try {
    const result = await db.collection("leaders").insertOne(leader);
    res.status(200).json(result);
  } catch (err) {
    res.status().json({ message: err.message });
  }
});

//listen on port
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it`);
});
