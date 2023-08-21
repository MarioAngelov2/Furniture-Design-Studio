const mongoose = require("mongoose");
const Blog = require("../models/Blog");

const getBlogPosts = async (req, res) => {
    try {
        const blogPosts = await Blog.find({}).exec();
        res.json(blogPosts)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getBlogPosts