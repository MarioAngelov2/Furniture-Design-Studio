const { Router } = require("express");
const getProducts = require("../controllers/getProducts");
const getProjects = require("../controllers/getProjects");
const getBlogPosts = require("../controllers/getBlogPosts");
const insertSampleData = require("../controllers/insertSampleData");

const router = Router();

router.get("/products", getProducts);
router.get("/projects", getProjects);
router.get('/posts', getBlogPosts)

module.exports = router;
