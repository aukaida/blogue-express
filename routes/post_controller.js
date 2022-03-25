const router = require("express").Router();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// GET - VER TODOS OS USUÁRIOS

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// POST - CADASTRAR USUÁRIO

// PUT - ATUALIZAR USUÁRIO

// DELETE - DELETAR USUÁRIO

// GET - VER USUÁRIO ESPECÍFICO POR ID

module.exports = router;
