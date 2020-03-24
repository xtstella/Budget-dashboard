const express = require("express");
const bodyParser = require("body-parser");
//const axios = require('axios');

const connection = require('./app/config/connection');
const routes = require('./app/controllers/routes');
var cors = require('cors');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

const hostname = '127.0.0.1';
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({ message: "API Running" });
});

connection.init();
routes.configure(app);


const webserver = app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});