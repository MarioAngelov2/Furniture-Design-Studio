const Shop = require("../models/Shop");
const createHttpError = require("http-errors");

const getProducts = async (req, res, next) => {
    try {
        const products = await Shop.find({}).exec();

        if (!products) {
            throw createHttpError(404, "Products not found");
        }

        res.status(200).json(products);
    } catch (error) {
        next(error)
        console.log(error);
    }
};

module.exports = getProducts;
