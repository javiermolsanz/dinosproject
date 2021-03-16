const express = require("express");

const ejs = require("ejs");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.set("view engine", "html");
app.engine("html", ejs.renderFile);

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "public")
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
