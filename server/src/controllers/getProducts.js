const mongoose = require("mongoose");
const Shop = require("../models/Shop");

const getProducts = async (req, res) => {
    try {
        const products = await Shop.find({}).exec();
        res.json(products)
    } catch (error) {
        console.log(error)
    }
}

module.exports = getProducts