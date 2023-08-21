require('dotenv').config();
const express = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_CONNECTION_STRING)

app.get('/', (req, res) => {
    res.json('works')
})

app.listen(4002, () => console.log('Server is listening on port 4002...'))