var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const API_KEY = process.env.MYMOVIZ_API_KEYS;

// router.get('/', (req, res) =>{ contenu de la fonction //Utiliser le DocType importé
// res.json({ clé: valeur })}) //Retour de la route

router.get("/movies", (req, res) => {
  //console.log("test route");
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      res.json({ result: true, movies: data.results });
    });
});

module.exports = router;
