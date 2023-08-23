require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const router = require("./src/routes/routes");

const app = express();

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === "development") {
    app.use(cors());
} else {
    app.use(
        cors({
            origin: "https://verdant-pothos-9cdb4c.netlify.app",
        })
    );
}

app.use("/", router);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        err: "An error occurred while processing your request.",
    });
});

app.listen(4002, () => console.log("Server is listening on port 4002..."));
