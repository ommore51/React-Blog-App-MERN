const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Blog = new Schema({
    blogTitle: {
        type: String,
        required: true,
    },
    blogContent: {
        type: String,
        required: true,
    },
    cat: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    imgUrl2: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Blog", Blog);