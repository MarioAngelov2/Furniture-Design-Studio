const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
    title: String,
    images: [String],
});

const ProjectsModel = mongoose.model("Projects", ProjectsSchema);

module.exports = ProjectsModel;
