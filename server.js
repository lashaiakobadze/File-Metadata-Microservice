"use strict";

var express = require("express");
var cors = require("cors");

// require and use "multer"...

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/hello", function(req, res) {
  res.json({ greetings: "Hello, API" });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Node.js listening ...");
});

let multer = require("multer");
app.post("/api/fileanalyse", multer().single("upfile"), (req, res) => {
  let respObj = {};
  respObj["name"] = req.file.originalname;
  respObj["type"] = req.file.mimetype;
  respObj["size"] = req.file.size;
  res.json(respObj);
});
