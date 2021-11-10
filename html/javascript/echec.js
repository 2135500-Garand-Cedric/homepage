//variables

let tableXPosition = [0, 94, 188, 282, 376, 470, 564, 658, 0, 94, 188, 282, 376, 470, 564, 658, 0, 94, 188, 282, 376, 470, 564, 658, 0, 94, 188, 282, 376, 470, 564, 658];
let tableYPosition = [0, 0, 0, 0, 0, 0, 0, 0, 94, 94, 94, 94, 94, 94, 94, 94, 658, 658, 658, 658, 658, 658, 658, 658, 564, 564, 564, 564, 564, 564, 564, 564];
let tablePosition = [tableXPosition, tableYPosition];
let tablePieces = ["whiteRook", "whiteKnight", "whiteBishop", "whiteQueen", "whiteKing", "whiteBishop", "whiteKnight", "whiteRook", "whitePawn",
"whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "blackRook", "blackKnight", "blackBishop", "blackQueen",
"blackKing", "blackBishop", "blackKnight", "blackRook", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn"];
let tableBasePieces = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8",
"a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"]

let piece = "";
let square = "";
let startX = "";
let startY = "";
let turn = 0;









document.getElementById("a1").onclick = function() {square = "a1", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("a2").onclick = function() {square = "a2", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("a3").onclick = function() {square = "a3", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("a4").onclick = function() {square = "a4", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("a5").onclick = function() {square = "a5", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("a6").onclick = function() {square = "a6", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("a7").onclick = function() {square = "a7", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("a8").onclick = function() {square = "a8", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};

document.getElementById("b1").onclick = function() {square = "b1", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("b2").onclick = function() {square = "b2", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("b3").onclick = function() {square = "b3", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("b4").onclick = function() {square = "b4", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("b5").onclick = function() {square = "b5", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("b6").onclick = function() {square = "b6", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("b7").onclick = function() {square = "b7", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("b8").onclick = function() {square = "b8", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};

document.getElementById("c1").onclick = function() {square = "c1", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("c2").onclick = function() {square = "c2", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("c3").onclick = function() {square = "c3", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("c4").onclick = function() {square = "c4", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("c5").onclick = function() {square = "c5", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("c6").onclick = function() {square = "c6", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("c7").onclick = function() {square = "c7", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("c8").onclick = function() {square = "c8", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};

document.getElementById("d1").onclick = function() {square = "d1", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("d2").onclick = function() {square = "d2", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("d3").onclick = function() {square = "d3", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("d4").onclick = function() {square = "d4", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("d5").onclick = function() {square = "d5", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("d6").onclick = function() {square = "d6", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("d7").onclick = function() {square = "d7", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("d8").onclick = function() {square = "d8", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};

document.getElementById("e1").onclick = function() {square = "e1", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("e2").onclick = function() {square = "e2", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("e3").onclick = function() {square = "e3", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("e4").onclick = function() {square = "e4", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("e5").onclick = function() {square = "e5", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("e6").onclick = function() {square = "e6", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("e7").onclick = function() {square = "e7", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("e8").onclick = function() {square = "e8", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};

document.getElementById("f1").onclick = function() {square = "f1", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("f2").onclick = function() {square = "f2", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("f3").onclick = function() {square = "f3", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("f4").onclick = function() {square = "f4", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("f5").onclick = function() {square = "f5", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("f6").onclick = function() {square = "f6", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("f7").onclick = function() {square = "f7", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("f8").onclick = function() {square = "f8", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};

document.getElementById("g1").onclick = function() {square = "g1", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("g2").onclick = function() {square = "g2", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("g3").onclick = function() {square = "g3", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("g4").onclick = function() {square = "g4", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("g5").onclick = function() {square = "g5", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("g6").onclick = function() {square = "g6", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("g7").onclick = function() {square = "g7", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("g8").onclick = function() {square = "g8", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};

document.getElementById("h1").onclick = function() {square = "h1", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("h2").onclick = function() {square = "h2", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("h3").onclick = function() {square = "h3", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("h4").onclick = function() {square = "h4", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("h5").onclick = function() {square = "h5", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("h6").onclick = function() {square = "h6", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("h7").onclick = function() {square = "h7", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};
document.getElementById("h8").onclick = function() {square = "h8", tablePosition = movePiece(piece, startY, startX, square, tablePosition), piece = "", startX = "", startY = "", turn++, piece = witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces), startX = PositionX(square), startY = PositionY(square)};

function movePiece(piece, startY, startX, square, tablePosition) {
    alert(piece);


    if(piece != "") {
        let endX = 0;
        let endY = 0;
        let movementX = 0;
        let movementY = 0;
        
    
        endX = PositionX(square);
        endY = PositionY(square);
    
        movementX = endX - startX;
        movementY = endY - startY;
        movementX+= "px";
        movementY+= "px";
        //alert(tablePosition);


        for(let i = 0; i < tableXPosition.length; i++) {
            if(tableXPosition[i] == startX && tableYPosition[i] == startY) {
                tableXPosition[i] = endX;
                tableYPosition[i] = endY;
            }
        }

        let move = document.getElementById(piece);
        move.style.left = movementX;
        move.style.bottom = movementY;
        alert(movementX);
        alert(movementY);


        
        tablePosition = [tableXPosition, tableYPosition];
        //alert(tablePosition);

    }
    //alert(piece);
    
    return tablePosition;
}

function PositionX(square) {
    let x = square[0];
    let position = 0;

    if(x == "a") {
        position+= 0;
    }
    else if(x == "b") {
        position+= 94
    }
    else if(x == "c") {
        position+= 188
    }
    else if(x == "d") {
        position+= 282
    }
    else if(x == "e") {
        position+= 376
    }
    else if(x == "f") {
        position+= 470
    }
    else if(x == "g") {
        position+= 564
    }
    else if(x == "h") {
        position+= 658
    }

    return position;
}

function PositionY(square) {
    let y = square[1];
    let position = "";

    y--;
    position = y * 94;

    return position;
}



function witchPieceMoves(turn, piece, square, tablePosition, tablePieces, tableBasePieces) {
    //alert(tablePosition)
    //alert(piece);
    let number = 0;
    number = Math.floor(turn/2);
    turn = turn - number * 2;


    if(turn == 1) {
        let squarePositionX = 0;
        let squarePositionY = 0;
        tableYPosition = tablePosition[1];
        tableXPosition = tablePosition[0];
        alert(square);
    
        squarePositionX = PositionX(square);
        squarePositionY = PositionY(square);

        //alert(squarePositionX);
        //alert(squarePositionY);
        //alert(tableXPosition[11]);
        //alert(tableYPosition[11]);
        
    
        for(let i = 0; i < tablePieces.length; i++) {
            if(tableXPosition[i] == squarePositionX && tableYPosition[i] == squarePositionY) {
                piece = tablePieces[i];
                piece+= tableBasePieces[i];
            }
        }
        if(piece == "") {
            piece = "nothing";
        }
    }

    alert(piece);

    return piece;
}

function Position(tableXPosition, tableYPosition) {
    let xposition = "";
    let yposition = "";
    for(let i = 0; i < tableXPosition.length; i++) {
        xposition+= tableXPosition[i];
        xposition+= "";
        yposition+= tableYPosition[i];
        yposition+= "";
    }

    alert(xposition);
    alert(yposition);
}
