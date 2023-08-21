const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema({
    title: String,
    images: [String],
});

const ShopModel = mongoose.model("Shop", ShopSchema);

module.exports = ShopModel;
