const express = require('express');
const body = require('body-parser');
const path = require('path');

const cookie = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();

app.use(body.json());
app.use(body.urlencoded({ extended: true }));
app.use(cookie());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.get("/", function(req, res, next){
    res.send("Hello");
});

app.listen(3000);