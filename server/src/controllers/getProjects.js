const Projects = require("../models/Projects");
const createHttpError = require("http-errors");

const getProjects = async (req, res, next) => {
    try {
        const projects = await Projects.find({}).exec();

        if (!projects) {
            throw createHttpError(404, 'Projects not found')
        }

        res.status(200).json(projects)
    } catch (error) {
        next(error)
        console.log(error)
    }
}

module.exports = getProjects