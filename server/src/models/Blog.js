const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    image: String,
    title: String,
    article: String,
});

const BlogModel = mongoose.model("Shop", BlogSchema);

module.exports = BlogModel;
