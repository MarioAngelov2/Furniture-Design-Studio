const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema({
    title: String,
    image: String,
});

const ShopModel = mongoose.model("Shop", ShopSchema);

module.exports = ShopModel;
