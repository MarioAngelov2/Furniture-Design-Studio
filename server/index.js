require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const router = require("./src/routes/routes");

const app = express();

app.use(
    cors({
        origin: [
            "https://main--exquisite-choux-2a199d.netlify.app",
            "https://64e4d14a55595f1d10ece6d1--unique-pegasus-5a89b8.netlify.app",
        ],
    })
);

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

app.use("/", router);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        err: "An error occurred while processing your request.",
    });
});

app.listen(4002, () => console.log("Server is listening on port 4002..."));
