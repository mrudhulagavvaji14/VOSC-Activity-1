let cells = document.querySelectorAll(".cell");
let status = document.getElementById("status");
let restart = document.getElementById("restart");

let currentPlayer = "X";
let gameOver = false;

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {

        if (cell.textContent != "" || gameOver) {
            return;
        }

        cell.textContent = currentPlayer;

        checkWinner();

        if (!gameOver) {
            if (currentPlayer == "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

            status.textContent = "Player " + currentPlayer + "'s Turn";
        }
    });
});

function checkWinner() {

    for (let combination of winningCombinations) {

        let a = cells[combination[0]].textContent;
        let b = cells[combination[1]].textContent;
        let c = cells[combination[2]].textContent;

        if (a != "" && a == b && b == c) {
            status.textContent = "Player " + currentPlayer + " Wins!";
            gameOver = true;
            return;
        }
    }

    let draw = true;

    cells.forEach(function(cell) {
        if (cell.textContent == "") {
            draw = false;
        }
    });

    if (draw) {
        status.textContent = "It's a Draw!";
        gameOver = true;
    }
}

restart.addEventListener("click", function() {

    cells.forEach(function(cell) {
        cell.textContent = "";
    });

    currentPlayer = "X";
    gameOver = false;
    status.textContent = "Player X's Turn";
});
