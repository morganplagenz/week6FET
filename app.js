// PREPPING FOR THE GAME


//assigning variables and functions
let cells = Array.from(document.getElementsByClassName('indCell')); //keep
const playerDisplay = document.querySelector('#player'); //keep

diagonalArray1 = [0, 4, 8];
diagonalArray2 = [2,4,6];
topAcrossArray = [0,1,2];
middleAcrossArray = [3,4,5];
bottomAcrossArray = [6,7,8];
verticalLeftArray = [0,3,6];
verticalMiddleArray = [1,4,7];
verticalRightArray = [2,5,8];

let currentPlayer = "Player X";

playerOPlays = [];
playerXPlays = [];

//creating and hiding the bootstrap banners
playerOalert = document.getElementById("playerOWon");
playerXalert = document.getElementById("playerXWon");
drawAlert = document.getElementById("gameInDraw");

playerOalert.style.display = 'none'; 
playerXalert.style.display = 'none'; 
drawAlert.style.display = 'none'; 
 
// function that will allow the X and O images to append to a clicked cell
function addImgO (id) {
    var img = document.createElement('img');
    img.src = 'o.png';
    document.getElementById(id).appendChild(img);
} 

function addImgX (id){
    var img = document.createElement('img');
    img.src = 'x.png';
    document.getElementById(id).appendChild(img);
}

// winning arrays..using the " .every " method to compare current player's array of cells clicked on to winning arrays listed above
function diagonalWinner(){
        if(diagonalArray1.every(i => playerOPlays.includes(i))){
            console.log(`${currentPlayer} wins left diagonally!`); //check my work
            playerOalert.style.display = 'block'; //show bootstrap banner
            player.style.display = 'none';   //hide 'whos turn is it' heading
            return true;
        }
        if(diagonalArray2.every(i => playerOPlays.includes(i))){
            console.log(`${currentPlayer} wins right diagonally`);
            playerOalert.style.display = 'block';
            player.style.display = 'none';   
            return true;
        }
        if(diagonalArray1.every(i => playerXPlays.includes(i))){
            console.log(`${currentPlayer} wins left diagonally!`);
            playerXalert.style.display = 'block';
            player.style.display = 'none';   
            return true;
        }
        if(diagonalArray2.every(i => playerXPlays.includes(i))){
            console.log(`${currentPlayer} wins right diagonally`);
            playerXalert.style.display = 'block';
            player.style.display = 'none';   
            return true;
        } else {
            return false;
        }
}

function horizontalWinner(){
    if(topAcrossArray.every(i => playerOPlays.includes(i))){
        console.log(`${currentPlayer} wins top across!`);
        playerOalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(middleAcrossArray.every(i => playerOPlays.includes(i))){
        console.log(`${currentPlayer} wins middle across`);
        playerOalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(bottomAcrossArray.every(i => playerOPlays.includes(i))){
        console.log(`${currentPlayer} wins bottom across`);
        playerOalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(topAcrossArray.every(i => playerXPlays.includes(i))){
        console.log(`${currentPlayer} wins top across!`);
        playerXalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(middleAcrossArray.every(i => playerXPlays.includes(i))){
        console.log(`${currentPlayer} wins middle across`);
        playerXalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(bottomAcrossArray.every(i => playerXPlays.includes(i))){
        console.log(`${currentPlayer} wins bottom across`);
        playerXalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    } else {
        return false;
    }
}

function verticalWinner(){
    if(verticalLeftArray.every(i => playerOPlays.includes(i))){
        console.log(`${currentPlayer} wins left vertically!`);
        playerOalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(verticalMiddleArray.every(i => playerOPlays.includes(i))){
        console.log(`${currentPlayer} wins middle vertically`);
        playerOalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(verticalRightArray.every(i => playerOPlays.includes(i))){
        console.log(`${currentPlayer} wins right vertically`);
        playerOalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(verticalLeftArray.every(i => playerXPlays.includes(i))){
        console.log(`${currentPlayer} wins left vertically!`);
        playerXalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(verticalMiddleArray.every(i => playerXPlays.includes(i))){
        console.log(`${currentPlayer} wins middle vertically`);
        playerXalert.style.display = 'block';
        player.style.display = 'none';   
        return true;
    }
    if(verticalRightArray.every(i => playerXPlays.includes(i))){
        console.log(`${currentPlayer} wins right vertically`);
        playerXalert.style.display = 'block';
        player.style.display = 'none';  
        return true;
    } else {
        return false;
    }
}

//this function will determine if there is a full board and no winner if the current player is Player O
function checkDrawO (){
    if (verticalWinner() == false && horizontalWinner() == false && diagonalWinner() == false && playerOPlays.length === 5){
        console.log("it is a draw"); //check my work
        drawAlert.style.display = 'block'; //show bootstrap banner
        player.style.display = 'none'; //hide 'whos turn is it' heading
    }
};

//this function will determine if there is a full board and no winner if the current player is Player X
function checkDrawX (){
    if (verticalWinner() == false && horizontalWinner() == false && diagonalWinner() == false && playerXPlays.length === 5){
        console.log("it is a draw");
        drawAlert.style.display = 'block';
        player.style.display = 'none'; 
    }
};

// STARTING THE GAME

function startGame(){
    cells.forEach( indCell => {
        indCell.textContent = '';
    });
    
};

startGame();


//function that tells the computer to allow each cell to be clicked & a function to start with each click
cells.forEach(indCell =>{
    indCell.addEventListener('click', clickOutcome);
});




//actions of what happens when a cell is clicked
function clickOutcome(e){
    const index = cells.indexOf(e.target); //don't touch
    console.log(index); //works as its reading every cell i click on

    playerDisplay.innerHTML = `It's ${currentPlayer}'s Turn`; //don't touch

    if(currentPlayer === "Player X"){ //tells us who's turn it is depending on the previous click event
        addImgO(index);
        currentPlayer = "Player O";
        playerOPlays.push(index);
        console.log(playerOPlays);
        diagonalWinner();
        horizontalWinner();
        verticalWinner();
        checkDrawO();
    }else {
        addImgX(index);
        currentPlayer = "Player X";
        playerXPlays.push(index);
        console.log(playerXPlays);
        diagonalWinner();
        horizontalWinner();
        verticalWinner();
        checkDrawX();
    }
}


//RESETTING THE GAME

//these are all buttons to clear the gameboard
const btn = document.getElementById('empty-button'); //this is the trashbin icon
const btnOWins = document.getElementById('oWins'); //"Play Again" button that shows up when Player O Wins
const btnXWins = document.getElementById('xWins'); //"Play Again" button that shows up when Player X Wins
const btnDraw = document.getElementById('draw'); //"Play Again" button that shows up when there is a draw

btn.onclick = () => {
    gameReplay();
}

btnOWins.onclick = () => {
    gameReplay();
}

btnXWins.onclick = () => {
    gameReplay();
}

btnDraw.onclick = () => {
    gameReplay();
}

gameReplay = () => {
    playerOalert.style.display = 'none'; 
    playerXalert.style.display = 'none'; 
    drawAlert.style.display = 'none';
    player.style.display = 'block'; 
    playerOPlays = []; //clearing the array
    playerXPlays = []; //clearing the array
    startGame();
};


