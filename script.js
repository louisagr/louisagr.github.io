/* COULEUR DYNAMIQUE */
const randomColor = () => '#' + Math.random().toString(16).substr(-6)
const changeColor = () => document.body.style.color = randomColor()

setInterval(() => {
  changeColor()
}, 3500)

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    changeColor()
  }
}
/* GENERATEUR */
// var type = ["Un site ", "Une appli ", "Un projet ", "Une plateforme "];
// var adjectif = ["trop cool ", "super bien ", "sympa ", "responsive ", "pas trop naze "];
// var theme = ["sur les chats", "à la Facebook", "pour les développeurs", "pour les kids"];
//
// var typeAle = type[Math.floor(Math.random() * 4)];
// var adjectifAle = adjectif[Math.floor(Math.random() * 5)];
// var themeAle = theme[Math.floor(Math.random() * 4)];

//
// function genere() {
// var sujet = typeAle + adjectifAle + themeAle + " !";
// document.querySelector("#generator").innerHTML = "<p>" + sujet + "</p>";
// }
document.getElementById("btn").onclick = function() {
  var type = ["Un site ", "Une appli ", "Un projet ", "Une plateforme ", "Un Wordpress ", "Un Wix ", "Un portfolio ", "Un réseau social ", "Une to-do list ", "Un template "];
  var adjectif = ["trop cool ", "super bien ", "sympa ", "responsive ", "pas trop naze ", "révolutionnaire ", "facile à faire ", "fait à l'arrache ", "à la main ", "en JS pur "];
  var theme = ["sur les chats", "à la Facebook", "pour les développeurs", "pour les kids", "pour Philippe", "sur les poneys", "pour apprendre à coder", "pour se la péter", "pour les photos de ma Maman", "pour le CV d'un pote"];

  var typeAle = type[Math.floor(Math.random() * 10)];
  var adjectifAle = adjectif[Math.floor(Math.random() * 10)];
  var themeAle = theme[Math.floor(Math.random() * 10)];

  var sujet = typeAle + adjectifAle + themeAle + " !";
  var generer = document.querySelector("#generator");
  generer.innerHTML = sujet;
}
