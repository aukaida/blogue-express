const { request } = require("../routes");
const db = require("../database.js");

const router = require("express").Router();

let posts = [];

// GET - VER TODOS OS POSTS
router.get("/", (req, res) => {
  const posts = db.getDb().collection("posts");
  posts
    .find({})
    .limit(50)
    .toArray((err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
});
// POST - CADASTRAR POSTS
router.post("/", (req, res) => {
  const posts = db.getDb().collection("posts");
  const post = {
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
    autor: req.body.autor,
    Data_De_Criacao: new Date(),
  };
  posts.insertOne(post, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

// PUT - ATUALIZAR POST
router.put("/:titulo", (req, res) => {
  const posts = db.getDb().collection("posts");
  const post = {
    Data_De_Update: new Date(),
  };

  if (req.body.titulo) post.titulo = req.body.titulo;
  if (req.body.conteudo) post.conteudo = req.body.conteudo;
  if (req.body.autor) post.autor = req.body.autor;

  posts.updateOne(
    { titulo: req.params.titulo },
    { $set: post },
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
});

// DELETE - DELETAR POST
router.delete("/:titulo", (req, res) => {
  const posts = db.getDb().collection("posts");
  posts.deleteOne({ titulo: req.params.titulo }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

// GET - VER POST POR TITULO
router.get("/:titulo", (req, res) => {
  const posts = db.getDb().collection("posts");
  posts.findOne({ titulo: req.params.titulo }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
