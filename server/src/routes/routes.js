const { Router } = require("express");
const getProducts = require("../controllers/getProducts");

const router = Router();

router.get("/products", getProducts);

module.exports = router;
