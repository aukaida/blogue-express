const express = require("express");
const app = express();

app.use(express.json());
app.set("trust proxy", true);

app.use("/posts", require("./controllers/post_controller.js"));

module.exports = app;
