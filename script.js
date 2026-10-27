// Année automatique dans le footer
const annee = document.getElementById("annee");
if (annee) annee.textContent = new Date().getFullYear();
