var model = {};

// Get browser width and height...
model.browserWidth = 200; //window.innerWidth;
model.browserHeight = 200; //window.innerHeight;


// Draw a box for the game area...
var gameArea = document.createElement("div");
gameArea.setAttribute('style', "position: absolute; top: 0; left: 0; width: " + model.browserWidth + "px; height: " + model.browserHeight + "px; background-color; red; border: 1px solid black;");

document.body.appendChild(gameArea);
