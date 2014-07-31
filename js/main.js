var model = {};

// Get browser width and height...
model.browserWidth = window.innerWidth - 20;
model.browserHeight = (window.innerHeight / 2 ) - 20;
model.gameStarted = false;


// Draw a DIV for the game area...
var gameArea = document.createElement("div");
gameArea.setAttribute('style', "position: absolute; top: 10px; left: 10px; width: " + model.browserWidth + "px; height: " + model.browserHeight + "px; background-color: #FFFFFF; border: 1px solid black;");
gameArea.addEventListener('click', gameAreaClickHandler);
gameArea.addEventListener('mousemove', gameAreaMouseMoveHandler);

var loadInterval = window.setInterval(function () {
    gameArea.style.backgroundColor = (generateRandomNumber(0, 2) === 0 ? 'blue' : 'red');
}, 100);

document.body.appendChild(gameArea);

var timeLapseTextMessage = document.createElement("span");
timeLapseTextMessage.style.position = 'absolute';
timeLapseTextMessage.style.top = '5px';
timeLapseTextMessage.style.left = '10px';
timeLapseTextMessage.style.color = '#FFFFFF';
timeLapseTextMessage.style.fontFamily = 'Courier New';
timeLapseTextMessage.style.fontSize = '18px';
timeLapseTextMessage.innerText = "Time: 0 ms";

var mousePointTextMessage = document.createElement("span");
mousePointTextMessage.style.position = 'absolute';
mousePointTextMessage.style.top = '5px';
mousePointTextMessage.style.right = '10px';
mousePointTextMessage.style.color = '#FFFFFF';
mousePointTextMessage.style.fontFamily = 'Courier New';
mousePointTextMessage.style.fontSize = '18px';
mousePointTextMessage.innerText = "Mouse: 0000,0000";

gameArea.appendChild(mousePointTextMessage);
gameArea.appendChild(timeLapseTextMessage);

// Randomly pick a cv:Point
model.cvPoint = {
    'x': generateRandomNumber(1, model.browserWidth),
    'y': generateRandomNumber(1, model.browserHeight)
};

console.log(model.cvPoint);


function generateRandomNumber(fromAndIncluding, upToAndExcluding) {
    return Math.floor(Math.random() * (upToAndExcluding + fromAndIncluding) + fromAndIncluding)
}

function startGame() {
    model.startTime = new Date();
    model.gameStarted = true;
    model.timerUpdate = setInterval(timerUpdateChangeHandler, 100);
}

function endGame() {
    model.gameStarted = false;
    window.clearInterval(model.timerUpdate);
    model.endTime = new Date();
    updateTime(model.endTime);
}

function updateTime(timeNow) {
    var timeLapse = timeNow - model.startTime;

    timeLapseTextMessage.innerText = "Time: " + timeLapse + " ms";
}

function gameAreaClickHandler(evt) {
    if ( !model.gameStarted ) {
        startGame(); //  At the moment, start game when you click.
        window.clearInterval(loadInterval);
    }
    else {
        endGame();
    }
}

function gameAreaMouseMoveHandler(evt) {
    mousePointTextMessage.innerText = "Mouse: " + evt.offsetX + ", " + evt.offsetY;
}

function timerUpdateChangeHandler(evt) {
    updateTime(new Date());
}
