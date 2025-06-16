let currMoleTile;
let currMoleTile1;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for(let i = 0; i < 9; i++) {  //i goes from 0-8
        //<div id="0-8"></div> in js
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1600); //1000ms --> 1s // calling the mole
    setInterval(setPlant, 1900); //2000ms --> 2s // calling the plant piranha
    setInterval(setMole2, 1400)
}

function getRandomTile() {
    // math.random --> (0-1) * 9 ( range becomes (0-9)) --> round down to (0-8 integers)
    let num = Math.floor(Math.random() * 9);
    return  num.toString();
}

function setMole2() {
    if(gameOver) {   //if gameover mole will not be visible
        return;
    }

    if (currMoleTile1) {
        currMoleTile1.innerHTML = ""; //clear all the tiles within the div tag mole appears once in one tile and next time on another tile(pipe)
    }
    let mole1 = document.createElement("img");
    mole1.src = "./monty-mole.png";

    let num2 = getRandomTile();
    if(currPlantTile && currPlantTile.id == num2) {
        return;
    }
    if(currMoleTile && currMoleTile.id == num2) {
        return;
    }
    currMoleTile1 = document.getElementById(num2);
    currMoleTile1.appendChild(mole1);
}

function setMole() {
    if(gameOver) {   //if gameover mole will not be visible
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = ""; //clear all the tiles within the div tag mole appears once in one tile and next time on another tile(pipe)
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num) {
        return;
    }
    if(currMoleTile1 && currMoleTile1.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}



function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if(gameOver) {   // if gameover the player should not be able to select tile
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score
    }
    if (this == currMoleTile1) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}