var Express = require("express");
var cors = require("cors");
var multer = require("multer");
var MongoDBClient = require("mongodb").MongoClient; 
var http = require("http")
var mongoose = require("mongoose");
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;





var app = Express();
app.use(cors());
app.use(Express.json())


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

// Set up Multer for file uploads
// Set up multer and GridFS storage
const storage = new GridFsStorage({
  url: CONNECTION_STRING,
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: 'uploads', // Must match the collection name in GridFS
    };
  },
});

const upload = multer({ dest: 'uploads/' });

app.post("/upload", upload.array('images'), async (req, res) => {
  try {
    // Handle uploaded files
    // You can access the uploaded files in req.files array
    console.log(req.files);

    // Save each uploaded file to MongoDB
    const fileIds = [];
    for (const file of req.files) {
      const fileId = await saveFileToMongoDB(file);
      fileIds.push(fileId);
    }

    // Respond with success message and file IDs
    res.status(200).json({ message: 'Images uploaded successfully', fileIds });
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).json({ error: 'Error uploading files' });
  }
});

// Function to save a file to MongoDB using GridFS
async function saveFileToMongoDB(file) {
  return new Promise((resolve, reject) => {
    const writeStream = gfs.createWriteStream({
      filename: file.originalname,
    });

    writeStream.on('close', (file) => {
      resolve(file._id);
    });

    writeStream.on('error', (error) => {
      reject(error);
    });

    writeStream.write(file.buffer);
    writeStream.end();
  });
}

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

 

  

