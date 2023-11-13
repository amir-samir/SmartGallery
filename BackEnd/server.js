var Express = require("express");
var cors = require("cors");
var multer = require("multer");
var http = require("http")
var mongoose = require("mongoose");
const Grid = require('gridfs-stream');

require("./models/PhotosModel");
const Images = mongoose.model("UploadedImages");




var app = Express();
app.use(cors());
app.use(Express.json({ limit: '300mb' }))


var CONNECTION_STRING = "mongodb+srv://FotoAppAdmin:0599455465s@Fotoappcluster.eftu1jh.mongodb.net/AppUsers";

var DATABASENAME = "AppUsers";
var database;

const db = mongoose.connection;
let gfs;

db.once('open', () => {
  gfs = Grid(db.db, mongoose.mongo);
  gfs.collection("uploads");
  console.log("MongoDB connected and GridFS initialized.");
  app.use(upload.array('images')); // Multer middleware
});



const upload = multer({ dest: 'uploads/' });




//Import User Model
const UserModel = require("./models/UserModel");

//Post new User to MongoDB
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


//Upload Images to MongoDB using base46
app.post("/uploadImagesBase", async (req, res) => {
  const { images } = req.body;
  try {
    for (let i = 0; i < images.length; i++) {
      await Images.create({
        imageName: `image${i + 1}`,
        category: "firstCategory",
        image: images[i],
      });
    }

    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
});


//Get the Images from MongoDB
app.get("/getImages", async (req, res) => {
  try {
    const images = await Images.find({});
    res.send({ status: "ok", data: images });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send({ status: "error", message: "Failed to fetch images" });
  }
});

//Delete an image with specific ID
app.delete("/deleteImage/:id", async (req, res) => {
  try {
    const imageId = req.params.id;
    // Delete the image from MongoDB based on the imageId.
    await Images.deleteOne({ _id: imageId });
    res.send({ status: "ok" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).send({ status: "error", message: "Failed to delete the image" });
  }
});

 

  

