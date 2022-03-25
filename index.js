const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;

const posts = require("./routes/post_controller.js");

app.use(posts);

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});
