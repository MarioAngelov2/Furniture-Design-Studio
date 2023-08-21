const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    images: [String],
    title: String,
    article: String,
    userPostDate: String,
    readTime: String,
});

const BlogModel = mongoose.model("Blog", BlogSchema);

module.exports = BlogModel;
