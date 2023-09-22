var Express = require("express");
var cors = require("cors");
var multer = require("multer");
var MongoDBClient = require("mongodb").MongoClient; 
var http = require("http")
var mongoose = require("mongoose");




var app = Express();
app.use(cors());
app.use(Express.json())

var CONNECTION_STRING = "mongodb+srv://FotoAppAdmin:0599455465s@Fotoappcluster.eftu1jh.mongodb.net/AppUsers";

var DATABASENAME = "AppUsers";
var database;

const UserModel = require("./models/UserModel");

app.post("/registerUser", (req, res) => {
  const user = req.body;
  const db = mongoose.connection;
  const userObject = new UserModel({
    email: user.email,
    kidsRoom: ["photos"],
    livingRoom: ["photos2"],
    bedRoom: ["photos3"]
  })

  db.collection(user.user_id)
    .insertOne(userObject)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create a new document" });
    });
});

//Create the Server with SSL
const server = http
  .createServer(app, (req, res) => {
    res.end("SSL ADDED");
})
  .listen(5083, () => console.log("Server is Running"));

//Connect to MongoDB using mongoose
mongoose
.connect(CONNECTION_STRING)
.then(() => {
  console.log("database connected");
 })
.catch((err) => console.log(err));

 

  

