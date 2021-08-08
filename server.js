require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

var cors = require("cors");


app.use(cors());
app.use(express.static("./client/dist"));
app.use(express.json());


// Listening for requests on the PORT
console.log(`Listening on port ${PORT}`);
app.listen(process.env.PORT || PORT);