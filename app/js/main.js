import Snake from "./Snake";
import Fruit from "./Fruit";
import {height, width, snakeSize, spacing} from "./constants";

"use strict";

window.onload = init;

let canvas;
let context;

let snake = new Snake();
let fruit = new Fruit();

let score = 0;
let bestScore = 0;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let gridColour = "#eee"

function init(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    snake.movingRight = true;
    snake.init();
    snake.draw(context);

    fruit.generateNewFruit(snake);
    fruit.draw(context);

    window.requestAnimationFrame(gameLoop);
}

function gameLoop(){

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = "20px Georgia";
    context.fillText("Score: " + score, 20, 650);
    context.fillText("Bestest score: " + bestScore, 20, 680);

    drawGrid();

    fruit.draw(context);

    snake.advanceSnake();
    snake.detectCollisionWithWalls();
    score = snake.detectCollisionWithFruit(fruit, score);
    snake.detectCollisionWithSelf();
    snake.draw(context);

    if (snake.collision) {
        snake.tick = 300;
        snake.collision = false;
        if (score > bestScore) {
            bestScore = score;
        }
        score = 0;
    }

    snake.eatFruit = false;

    setTimeout(function () {
        window.requestAnimationFrame(gameLoop);
    }, snake.tick)

}

function drawGrid() {
    context.beginPath();
    let drawX = snakeSize;
    let drawY = snakeSize;
    while (drawX <= width) {
        context.moveTo(drawX, 0);
        context.lineTo(drawX, height);
        drawX += snakeSize;
        context.strokeStyle = gridColour;
        context.stroke();
    }
    while (drawY <= height) {
        context.moveTo(0, drawY);
        context.lineTo(width, drawY);
        drawY += snakeSize;
        context.strokeStyle = gridColour;
        context.stroke();
    }
}


function keyPressed(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (!leftPressed && !snake.movingRight) {
                leftPressed = true;
                snake.resetMovement();
                snake.movingLeft = true;
            }
            break;
        case 'ArrowUp':
            if (!upPressed && !snake.movingDown) {
                upPressed = true;
                snake.resetMovement();
                snake.movingUp = true;
            }
            break;
        case 'ArrowRight':
            if (!rightPressed && !snake.movingLeft) {
                rightPressed = true;
                snake.resetMovement();
                snake.movingRight = true;
            }
            break;
        case 'ArrowDown':
            if (!downPressed && !snake.movingUp) {
                downPressed = true;
                snake.resetMovement();
                snake.movingDown = true;
            }
            break;
    }
}

function keyReleased(e) {
    switch(e.key) {
        case 'ArrowLeft':
            leftPressed = false;
            break;
        case 'ArrowUp':
            upPressed = false;
            break;
        case 'ArrowRight':
            rightPressed = false;
            break;
        case 'ArrowDown':
            downPressed = false;
            break;
    }}

document.addEventListener('keydown', keyPressed)
document.addEventListener('keyup', keyReleased)
