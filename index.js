const db = require("./database.js");
db.connectToServer();

const express = require("express");
const app = require("./routes.js");
const port = 3000;

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});
