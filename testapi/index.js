const express = require('express');

//new setup to do
require('dotenv').config(); //process our own .env file
const MongoUtil = require('./MongoUtil'); // our own module

const MONGO_URI = process.env.MONGO_URI;

const app = express();
// !!enable json processing
//restful API communicates via JSON format
//when data is sent to the RESTFul API, json is used
app.use(express.json());

async function main() {
    try {
        conn = await MongoUtil.connect(MONGO_URI, "project_restaurants")
      } catch(e) {
        console.error(e);
      }
      
    //await MongoUtil.connect(MONGO_URI, "project_restaurants")
    
    console.log("Database connected")
    app.get('/', function(req,res) {
        res.send("hello THERE");
    })

    app.get('/admin', function(req,res) {
      res.send("GOODBYE");
  })
}
main();
//begin listening to server
app.listen(3000, function() {
    console.log("Server has started")
})