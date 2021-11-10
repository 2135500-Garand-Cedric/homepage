alert("nice");
document.getElementById("carre").onclick = function() {move(tableauPosition)}

let tableauX = [0, 1, 2, 3, 4, 5];
let tableauY = [21, 22, 23, 24, 25, 26];
let tableauPosition = [tableauX, tableauY];


function move(tableauPosition) {
    let pawn = document.getElementById("pawn");
    pawn.style.left = "94px";
    pawn.style.bottom = "200px";

    let nombre = 3;
    nombre = Math.floor(nombre/2);
    alert(nombre);

    tableauX[4] = 48;
    alert(tableauPosition);
}