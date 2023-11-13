//Mongoose Schema to save the images to mongooDB
const mongoose = require("mongoose");

//Save Every image with its category and name
const PhotosModel = new mongoose.Schema(
    {
        imageName: String,
        category: String,
        image: String
    },
    {
        collection: "UploadedImages",
    }
);

mongoose.model("UploadedImages", PhotosModel);