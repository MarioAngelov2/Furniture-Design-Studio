require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const router = require("./src/routes/routes");

const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

app.use("/", router);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        err: "An error occurred while processing your request.",
    });
});

app.listen(4002, () => console.log("Server is listening on port 4002..."));
