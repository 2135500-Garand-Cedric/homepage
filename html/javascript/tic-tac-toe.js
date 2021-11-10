let Xcase1 = document.getElementById("Xcase1");
Xcase1.style.display = "none"
let Xcase2 = document.getElementById("Xcase2");
Xcase2.style.display = "none"
let Xcase3 = document.getElementById("Xcase3");
Xcase3.style.display = "none"
let Xcase4 = document.getElementById("Xcase4");
Xcase4.style.display = "none"
let Xcase5 = document.getElementById("Xcase5");
Xcase5.style.display = "none"
let Xcase6 = document.getElementById("Xcase6");
Xcase6.style.display = "none"
let Xcase7 = document.getElementById("Xcase7");
Xcase7.style.display = "none"
let Xcase8 = document.getElementById("Xcase8");
Xcase8.style.display = "none"
let Xcase9 = document.getElementById("Xcase9");
Xcase9.style.display = "none"

let Ocase1 = document.getElementById("Ocase1");
Ocase1.style.display = "none"
let Ocase2 = document.getElementById("Ocase2");
Ocase2.style.display = "none"
let Ocase3 = document.getElementById("Ocase3");
Ocase3.style.display = "none"
let Ocase4 = document.getElementById("Ocase4");
Ocase4.style.display = "none"
let Ocase5 = document.getElementById("Ocase5");
Ocase5.style.display = "none"
let Ocase6 = document.getElementById("Ocase6");
Ocase6.style.display = "none"
let Ocase7 = document.getElementById("Ocase7");
Ocase7.style.display = "none"
let Ocase8 = document.getElementById("Ocase8");
Ocase8.style.display = "none"
let Ocase9 = document.getElementById("Ocase9");
Ocase9.style.display = "none"

let tour = 1;

document.getElementById("case1").onclick = function() {tour = Case1(tour), VerificationGagnant(tour)} ;
document.getElementById("case2").onclick = function() {tour = Case2(tour), VerificationGagnant(tour)};
document.getElementById("case3").onclick = function() {tour = Case3(tour), VerificationGagnant(tour)};
document.getElementById("case4").onclick = function() {tour = Case4(tour), VerificationGagnant(tour)};
document.getElementById("case5").onclick = function() {tour = Case5(tour), VerificationGagnant(tour)};
document.getElementById("case6").onclick = function() {tour = Case6(tour), VerificationGagnant(tour)};
document.getElementById("case7").onclick = function() {tour = Case7(tour), VerificationGagnant(tour)};
document.getElementById("case8").onclick = function() {tour = Case8(tour), VerificationGagnant(tour)};
document.getElementById("case9").onclick = function() {tour = Case9(tour), VerificationGagnant(tour)};

function Case1(tour) {
    if(tour == 1 || tour == 3 || tour == 5 || tour == 7 || tour == 9) {
        if(Ocase1.style.display == "none" && Xcase1.style.display == "none") {
            Xcase1.style.display = "block";
            tour++;
        }
    }
    else if(tour == 2 || tour == 4 || tour == 6 || tour == 8) {
        if(Ocase1.style.display == "none" && Xcase1.style.display == "none") {
            Ocase1.style.display = "block";
            tour++;
        }
    }
    return tour;
}

function Case2(tour) {
    if(tour == 1 || tour == 3 || tour == 5 || tour == 7 || tour == 9) {
        if(Ocase2.style.display == "none" && Xcase2.style.display == "none") {
            Xcase2.style.display = "block";
            tour++;
        }
    }
    else if(tour == 2 || tour == 4 || tour == 6 || tour == 8) {
        if(Ocase2.style.display == "none" && Xcase2.style.display == "none") {
            Ocase2.style.display = "block";
            tour++;
        }
    }
    return tour;
}

function Case3(tour) {
    if(tour == 1 || tour == 3 || tour == 5 || tour == 7 || tour == 9) {
        if(Ocase3.style.display == "none" && Xcase3.style.display == "none") {
            Xcase3.style.display = "block";
            tour++;
        }
    }
    else if(tour == 2 || tour == 4 || tour == 6 || tour == 8) {
        if(Ocase3.style.display == "none" && Xcase3.style.display == "none") {
            Ocase3.style.display = "block";
            tour++;
        }
    }
    return tour;
}

function Case4(tour) {
    if(tour == 1 || tour == 3 || tour == 5 || tour == 7 || tour == 9) {
        if(Ocase4.style.display == "none" && Xcase4.style.display == "none") {
            Xcase4.style.display = "block";
            tour++;
        }
    }
    else if(tour == 2 || tour == 4 || tour == 6 || tour == 8) {
        if(Ocase4.style.display == "none" && Xcase4.style.display == "none") {
            Ocase4.style.display = "block";
            tour++;
        }
    }
    return tour;
}

function Case5(tour) {
    if(tour == 1 || tour == 3 || tour == 5 || tour == 7 || tour == 9) {
        if(Ocase5.style.display == "none" && Xcase5.style.display == "none") {
            Xcase5.style.display = "block";
            tour++;
        }
    }
    else if(tour == 2 || tour == 4 || tour == 6 || tour == 8) {
        if(Ocase5.style.display == "none" && Xcase5.style.display == "none") {
            Ocase5.style.display = "block";
            tour++;
        }
    }
    return tour;
}

function Case6(tour) {
    if(tour == 1 || tour == 3 || tour == 5 || tour == 7 || tour == 9) {
        if(Ocase6.style.display == "none" && Xcase6.style.display == "none") {
            Xcase6.style.display = "block";
            tour++;
        }
    }
    else if(tour == 2 || tour == 4 || tour == 6 || tour == 8) {
        if(Ocase6.style.display == "none" && Xcase6.style.display == "none") {
            Ocase6.style.display = "block";
            tour++;
        }
    }
    return tour;
}

function Case7(tour) {
    if(tour == 1 || tour == 3 || tour == 5 || tour == 7 || tour == 9) {
        if(Ocase7.style.display == "none" && Xcase7.style.display == "none") {
            Xcase7.style.display = "block";
            tour++;
        }
    }
    else if(tour == 2 || tour == 4 || tour == 6 || tour == 8) {
        if(Ocase7.style.display == "none" && Xcase7.style.display == "none") {
            Ocase7.style.display = "block";
            tour++;
        }
    }
    return tour;
}

function Case8(tour) {
    if(tour == 1 || tour == 3 || tour == 5 || tour == 7 || tour == 9) {
        if(Ocase8.style.display == "none" && Xcase8.style.display == "none") {
            Xcase8.style.display = "block";
            tour++;
        }
    }
    else if(tour == 2 || tour == 4 || tour == 6 || tour == 8) {
        if(Ocase8.style.display == "none" && Xcase8.style.display == "none") {
            Ocase8.style.display = "block";
            tour++;
        }
    }
    return tour;
}

function Case9(tour) {
    if(tour == 1 || tour == 3 || tour == 5 || tour == 7 || tour == 9) {
        if(Ocase9.style.display == "none" && Xcase9.style.display == "none") {
            Xcase9.style.display = "block";
            tour++;
        }
    }
    else if(tour == 2 || tour == 4 || tour == 6 || tour == 8) {
        if(Ocase9.style.display == "none" && Xcase9.style.display == "none") {
            Ocase9.style.display = "block";
            tour++;
        }
    }
    return tour;
}

function VerificationGagnant(tour) {
    let ligne1 = document.getElementById("ligne1");
    let ligne2 = document.getElementById("ligne2");
    let ligne3 = document.getElementById("ligne3");
    let ligne4 = document.getElementById("ligne4");
    let ligne5 = document.getElementById("ligne5");
    let ligne6 = document.getElementById("ligne6");
    let ligne7 = document.getElementById("ligne7");
    let ligne8 = document.getElementById("ligne8");
    let gagnantO = document.getElementById("O");
    let gagnantX = document.getElementById("X");
    let nulle = document.getElementById("nulle");
    let gagnant = false;
    if(Ocase1.style.display == "block" && Ocase2.style.display == "block" && Ocase3.style.display == "block" || Xcase1.style.display == "block" && Xcase2.style.display == "block" && Xcase3.style.display == "block") {
        ligne1.style.display = "block";
        if(Ocase1.style.display == "block") {
            gagnantO.style.display = "block";
            gagnant = true;
        }
        else {
            gagnantX.style.display = "block";
            gagnant = true;
        }
    }
    else if(Ocase4.style.display == "block" && Ocase5.style.display == "block" && Ocase6.style.display == "block" || Xcase4.style.display == "block" && Xcase5.style.display == "block" && Xcase6.style.display == "block") {
        ligne2.style.display = "block";
        if(Ocase4.style.display == "block") {
            gagnantO.style.display = "block";
            gagnant = true;
        }
        else {
            gagnantX.style.display = "block";
            gagnant = true;
        }
    }
    else if(Ocase7.style.display == "block" && Ocase8.style.display == "block" && Ocase9.style.display == "block" || Xcase7.style.display == "block" && Xcase8.style.display == "block" && Xcase9.style.display == "block") {
        ligne3.style.display = "block";
        if(Ocase7.style.display == "block") {
            gagnantO.style.display = "block";
            gagnant = true;
        }
        else {
            gagnantX.style.display = "block";
            gagnant = true;
        }
    }
    else if(Ocase1.style.display == "block" && Ocase4.style.display == "block" && Ocase7.style.display == "block" || Xcase1.style.display == "block" && Xcase4.style.display == "block" && Xcase7.style.display == "block") {
        ligne4.style.display = "block";
        if(Ocase1.style.display == "block") {
            gagnantO.style.display = "block";
            gagnant = true;
        }
        else {
            gagnantX.style.display = "block";
            gagnant = true;
        }
    }
    else if(Ocase2.style.display == "block" && Ocase5.style.display == "block" && Ocase8.style.display == "block" || Xcase2.style.display == "block" && Xcase5.style.display == "block" && Xcase8.style.display == "block") {
        ligne5.style.display = "block";
        if(Ocase2.style.display == "block") {
            gagnantO.style.display = "block";
            gagnant = true;
        }
        else {
            gagnantX.style.display = "block";
            gagnant = true;
        }
    }
    else if(Ocase3.style.display == "block" && Ocase6.style.display == "block" && Ocase9.style.display == "block" || Xcase3.style.display == "block" && Xcase6.style.display == "block" && Xcase9.style.display == "block") {
        ligne6.style.display = "block";
        if(Ocase3.style.display == "block") {
            gagnantO.style.display = "block";
            gagnant = true;
        }
        else {
            gagnantX.style.display = "block";
            gagnant = true;
        }
    }
    else if(Ocase1.style.display == "block" && Ocase5.style.display == "block" && Ocase9.style.display == "block" || Xcase1.style.display == "block" && Xcase5.style.display == "block" && Xcase9.style.display == "block") {
        ligne7.style.display = "block";
        if(Ocase1.style.display == "block") {
            gagnantO.style.display = "block";
            gagnant = true;
        }
        else {
            gagnantX.style.display = "block";
            gagnant = true;
        }
    }
    else if(Ocase3.style.display == "block" && Ocase5.style.display == "block" && Ocase7.style.display == "block" || Xcase3.style.display == "block" && Xcase5.style.display == "block" && Xcase7.style.display == "block") {
        ligne8.style.display = "block";
        if(Ocase3.style.display == "block") {
            gagnantO.style.display = "block";
            gagnant = true;
        }
        else {
            gagnantX.style.display = "block";
            gagnant = true;
        }
    }

    if(tour == 10 && gagnant == false) {
        nulle.style.display = "block";
    }
}