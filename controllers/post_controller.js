const { request } = require("../routes");

const router = require("express").Router();

let posts = [];

// GET - VER TODOS OS POSTS
router.get("/", (req, res) => {
  return res.status(200).json(posts);
});

// POST - CADASTRAR POSTS
router.post("/", (req, res) => {
  var new_post = {
    id: posts.length + 1,
    titulo: req.body.titulo,
    autor: req.body.autor,
    conteudo: req.body.conteudo,
    data: new Date().toJSON(),
  };
  posts.push(new_post);
  return res.status(200).json(new_post);
});

// PUT - ATUALIZAR POST
router.put("/:id", (req, res) => {
  var up_post = posts[req.params.id - 1];

  if (req.body.titulo) {
    up_post.titulo = req.body.titulo;
  }
  if (req.body.conteudo) {
    up_post.conteudo = req.body.conteudo;
  }
  if (req.body.autor) {
    up_post.autor = req.body.autor;
  }
  console.log(up_post);
  posts[req.params.id - 1] = up_post;
  return res.status(200).json();
});

// DELETE - DELETAR POST
router.delete("/:id", (req, res) => {
  posts.splice(req.params.id - 1, 1);
  return res.status(200).json();
});

// GET - VER POST ESPECÍFICO POR ID
router.get("/:id", (req, res) => {
  return res.status(200).json(posts[req.params.id - 1]);
});

module.exports = router;
