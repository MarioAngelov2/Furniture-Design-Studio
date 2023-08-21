const { Router } = require("express");
const getProducts = require("../controllers/getProducts");
const getProjects = require("../controllers/getProjects");

const router = Router();

router.get("/products", getProducts);
router.get("/projects", getProjects);

module.exports = router;
