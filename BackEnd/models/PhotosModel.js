const mongoose = require("mongoose");

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