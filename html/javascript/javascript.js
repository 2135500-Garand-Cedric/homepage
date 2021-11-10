//variables
let nom;
let message = "Quel est votre nom";
let resultat;


nom = prompt(message);

alert(nom);

resultat = confirm("Aimez vous le Javascrip");

if (resultat) {
    alert("Super!");
}
else {
    alert("J'espère que ça va changer");
}
