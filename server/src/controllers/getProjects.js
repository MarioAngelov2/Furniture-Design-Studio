const mongoose = require("mongoose");
const Projects = require("../models/Projects");

const getProjects = async (req, res) => {
    try {
        const projects = await Projects.find({}).exec();
        res.json(projects)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getProjects