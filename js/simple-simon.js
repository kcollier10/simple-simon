let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let computerTurn;
let intervalId;
let hard = false;
let noise = true;
let on = false;
let win;

let turnCounter = document.querySelector("#round");
let topLeft = document.querySelector("#top-left");
let topRight = document.querySelector("#top-right");
let bottomLeft = document.querySelector("#bottom-left");
let bottomRight = document.querySelector("#bottom-right");
let powerButton = document.querySelector("#power");
let startButton = document.querySelector("#start");
let hardButton = document.querySelector("#hard-mode");

hardButton.addEventListener('change', (event) => {
    if (hardButton.checked === true) {
        hard = true;
    } else {
        hard = false;
    }
});

powerButton.addEventListener('click', (event) => {
    if (powerButton.checked === true) {
        on = true;
        turnCounter.innerHTML = ("-");
    } else {
        on = false;
        turnCounter.innerHTML = ("");
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener('click', (event) => {
    if(on || win) {
        play();
    }
});

function play () {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    computerTurn = true;

    intervalId = setInterval(gameTurn, 800);
};

function gameTurn() {
    on = false;
    if (flash === turn) {
        clearInterval(intervalId);
        computerTurn = false;
        clearColor();
        on = true;
    }

    if (computerTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] === 1) one();
            if (order[flash] === 2) two();
            if (order[flash] === 3) three();
            if (order[flash] === 4) four();
            flash++;
        }, 200)
    }
}

function one () {
    if (noise) {
        let audio = document.getElementById('clip1');
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = 'lightgreen';
}

function two () {
    if (noise) {
        let audio = document.getElementById('clip2');
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = 'tomato';
}

function three () {
    if (noise) {
        let audio = document.getElementById('clip3');
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = 'yellow';
}

function four () {
    if (noise) {
        let audio = document.getElementById('clip4');
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = 'lightskyblue';
}

function clearColor () {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "blue";
}



