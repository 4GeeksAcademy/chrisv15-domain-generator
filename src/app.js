/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = [
    "yo",
    "tu",
    "el",
    "nosotros",
    "vosotros",
    "ellos",
    "elle",
    "yo",
    "tu",
    "el",
    "mi"
  ];
  var adj = [
    "gran",
    "gigante",
    "pequeño",
    "alto",
    "diminuto",
    "mediano",
    "inteligente",
    "dorado",
    "feo",
    "delgado",
    "brillante"
  ];
  var noun = [
    "jogger",
    "racoon",
    "pollo",
    "tenedor",
    "mando",
    "computador",
    "aritos",
    "estuche",
    "sombrilla",
    "celular",
    "sol"
  ];
  var extension = [
    ".es",
    ".com",
    ".co",
    ".de",
    ".org",
    ".mx",
    "fr",
    "pt",
    "eg",
    ".us",
    ".gb"
  ];
  let dominioGenerado =
    pronoun[Math.floor(Math.random() * 10)] +
    adj[Math.floor(Math.random() * 10)] +
    noun[Math.floor(Math.random() * 10)] +
    extension[Math.floor(Math.random() * 10)];

  console.log(dominioGenerado);
};
