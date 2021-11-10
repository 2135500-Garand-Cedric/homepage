//variables
let display24Heure = document.getElementById("affichage24Heure");
display24Heure.style.display = "none"
function horloge() {

    let AMPM = true;
    

    let dateActuelle = new Date();
    let annee = dateActuelle.getFullYear();
    let mois = dateActuelle.getMonth();
    mois++;
    let jourSemaine = dateActuelle.getDay();
    let jourMois = dateActuelle.getDate();
    let heureAMPM = dateActuelle.getHours();
    let heure24 = dateActuelle.getHours();
    let minute = dateActuelle.getMinutes();
    let seconde = dateActuelle.getSeconds();

    let displayAnnee = document.getElementById("annee");
    let displayMois = document.getElementById("mois");
    let displayJourSemaine = document.getElementById("semaine")
    let displayJourMois = document.getElementById("jour");
    let displayHeure = document.getElementById("affichageAMPM");
    let display24Heure = document.getElementById("affichage24Heure");
    let displayMinute = document.getElementById("minute");
    let displaySeconde = document.getElementById("seconde");
    let displayMoment = document.getElementById("matin_soir");


    //afficher AM ou PM
    if(heureAMPM < 12) {
        displayMoment.innerHTML = "AM";
    }
    else if(heureAMPM >= 12) {
        displayMoment.innerHTML = "PM";
    }


    //afficher heure AMPM
if(heureAMPM > 12) {
    heureAMPM = heureAMPM - 12;
}
if(heureAMPM < 10) {
    displayHeure.innerHTML = "0" + heureAMPM;
}
else {
    displayHeure.innerHTML = heureAMPM;
}

if(minute < 10) {
    displayMinute.innerHTML = "0" + minute;
}
else {
    displayMinute.innerHTML = minute;
}

if(seconde < 10) {
    displaySeconde.innerHTML = "0" + seconde;
}
else {
    displaySeconde.innerHTML = seconde;
}

//afficher 24 heure
if(heure24 < 10) {
    display24Heure.innerHTML = "0" + heure24;
}
else {
    display24Heure.innerHTML = heure24;
}




//afficher jour de la semaine

switch(jourSemaine) {
    case 0:
        displayJourSemaine.innerHTML = "Dimanche";
        break;
    case 1:
        displayJourSemaine.innerHTML = "Lundi";
        break;
    case 2:
        displayJourSemaine.innerHTML = "Mardi";
        break;
    case 3:
        displayJourSemaine.innerHTML = "Mercredi";
        break;
    case 4:
        displayJourSemaine.innerHTML = "Jeudi";
        break;
    case 5:
        displayJourSemaine.innerHTML = "Vendredi";
        break;
    case 6:
        displayJourSemaine.innerHTML = "Samedi";
        break;
}

//afficher Annee-Mois-Jour
if(jourMois < 10) {
    displayJourMois.innerHTML = "0" + jourMois;
}
else {
    displayJourMois.innerHTML = jourMois;
}

if(mois < 10) {
    displayMois.innerHTML =  "0" + (mois);
}
else {
    displayMois.innerHTML = mois;
}

displayAnnee.innerHTML = annee;

    
}

setInterval(horloge, 1000);

function Affichage24H() {
    let AMPM = document.getElementById("matin_soir");
    let display24Heure = document.getElementById("affichage24Heure");
    let displayHeure = document.getElementById("affichageAMPM");
    let iconeHorloge = document.getElementById("horloge");
    if(AMPM.style.display == "none") {
        AMPM.style.display = "block";
        displayHeure.style.display = "block";
        display24Heure.style.display = "none";
        iconeHorloge.style.color = "black";
    }
    else {
        AMPM.style.display = "none";
        displayHeure.style.display = "none";
        display24Heure.style.display = "block";
        iconeHorloge.style.color = "blue";
    }
}

function MasquerLaDate() {
    let date = document.getElementById("haut");
    let iconeCalendrier = document.getElementById("calendrier");
    if(date.style.display == "none") {
        date.style.display = "flex";
        iconeCalendrier.style.color = "black";
    } 
    else {
        date.style.display = "none";
        iconeCalendrier.style.color = "blue";
    }
}




