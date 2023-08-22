const Blog = require("../models/Blog");
const createHttpError = require("http-errors");

const getBlogPosts = async (req, res, next) => {
    try {
        const blogPosts = await Blog.find({}).exec();

        if (!blogPosts) {
            throw createHttpError(404, 'Posts not found')
        }

        res.status(200).json(blogPosts);
    } catch (error) {
        next(error)
        console.log(error);
    }
};

module.exports = getBlogPosts;
