const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
    images: [String],
    title: String,
});

const ProjectsModel = mongoose.model("Shop", ProjectsSchema);

module.exports = ProjectsModel;
