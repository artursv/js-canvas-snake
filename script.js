"use strict";

let canvas;
let context;

window.onload = init;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let snakeSize = 25;
let spacing = 0;

let movingUp = false;
let movingDown = false;
let movingRight = false;
let movingLeft = false

let score = 0;
let bestScore = 0;

let collision = false;

let fruitX;
let fruitY;

let snakeColour = 'black';
let fruitColour = 'red';

let width, height;

let snake = [];
let initSnakeSize = 5;

let eatFruit = false;

let tick = 300;

function initSnake() {
    snake = [];
    let i = 0;
    let posX = 25;
    let posY = 25;
    while (i < initSnakeSize) {
        snake.unshift({x: posX, y: posY})
        posX += snakeSize+spacing;
        i++;
    }
}

function detectCollisionWithWalls() {
    let head = snake[0];
    let totalSize = snakeSize + spacing;
    if (head.x > width - totalSize) {
        initSnake();
        resetMovement();
        movingRight = true;
        collision = true;
    }
    if (head.y > height - totalSize) {
        initSnake();
        resetMovement();
        movingRight = true;
        collision = true;

    }
    if (head.y < 0 || head.x < 0) {
        initSnake();
        resetMovement();
        movingRight = true;
        collision = true;

    }
}

function detectCollisionWithFruit() {
    let head = snake[0];

    if (head.x === fruitX && head.y === fruitY) {
        eatFruit = true;
        generateNewFruit();
        let newHead = {}

        if (movingUp) {
            newHead.x = head.x;
            newHead.y = head.y - snakeSize - spacing;
        }
        if (movingDown) {
            newHead.x = head.x;
            newHead.y = head.y + snakeSize + spacing;
        }
        if (movingRight) {
            newHead.x = head.x + snakeSize + spacing;
            newHead.y = head.y;
        }
        if (movingLeft) {
            newHead.x = head.x - snakeSize - spacing;
            newHead.y = head.y;
        }
        snake.unshift(newHead);
        tick = tick - (tick/100)*5;
        score += 1;
        console.log(tick);
    }
}

function detectCollisionWithSelf() {
    let head = snake[0];
    let tail = snake;
    tail = tail.slice(1);
    tail.forEach((snakeSection) => {
        if (snakeSection.x === head.x && snakeSection.y === head.y) {
            resetMovement();
            initSnake();
            movingRight = true;
            collision = true;

        }
    });
}

function drawFruit() {
    context.fillStyle = fruitColour;
    context.fillRect(fruitX, fruitY, snakeSize, snakeSize)
}

function drawGrid() {
    context.beginPath();
    let drawX = snakeSize;
    let drawY = snakeSize;
    while (drawX <= width) {
        context.moveTo(drawX, 0);
        context.lineTo(drawX, height);
        drawX += snakeSize;
        context.strokeStyle = '#eee';
        context.stroke();
    }
    while (drawY <= height) {
        context.moveTo(0, drawY);
        context.lineTo(width, drawY);
        drawY += snakeSize;
        context.strokeStyle = '#eee';
        context.stroke();
    }
}

function generateNewFruit() {
    let possibleX = width - snakeSize - spacing;

    let min = 1;
    let max = possibleX / snakeSize;

    let randomX = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomY = Math.floor(Math.random() * (max - min + 1)) + min;

    fruitX = randomX * snakeSize + spacing;
    fruitY = randomY * snakeSize + spacing;
    let collidesWithSnake = false;
    snake.forEach(snakePart => {
        if (snakePart.x === fruitX && snakePart.y === fruitY) {
            collidesWithSnake = true;
        }
    })
    if (collidesWithSnake) generateNewFruit();

}

function resetMovement() {
    movingUp = false;
    movingDown = false;
    movingRight = false;
    movingLeft = false
}

function drawSnakePart(snakePart) {
    context.fillStyle = snakeColour;
    context.fillRect(snakePart.x, snakePart.y, snakeSize, snakeSize)
    // context.strokeRect(snakePart.x, snakePart.y, snakeSize, snakeSize)
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

function init(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    width = canvas.width;
    height = canvas.height - 100;

    movingRight = true;
    initSnake();
    generateNewFruit();
    drawFruit();

    window.requestAnimationFrame(gameLoop);
}

function advanceSnake() {
    if (movingUp) {
        moveUp();
    }
    if (movingRight) {
        moveright();
    }
    if (movingDown) {
        moveDown();
    }
    if (movingLeft) {
        moveleft();
    }
}

function moveUp() {
    movingUp = true;
    let head ={
        x: snake[0].x,
        y: snake[0].y - (snakeSize+spacing),
    };
    snake.unshift(head);
    snake.pop();
}

function moveright() {
    movingRight = true;
    let head ={
        x: snake[0].x + (snakeSize+spacing),
        y: snake[0].y,
    };
    snake.unshift(head);
    snake.pop();
}

function moveleft() {
    movingLeft = true;
    let head ={
        x: snake[0].x - (snakeSize+spacing),
        y: snake[0].y,
    };
    snake.unshift(head);
    snake.pop();
}

function moveDown() {
    movingDown = true;
    let head = {
        x: snake[0].x,
        y: snake[0].y + (snakeSize+spacing),
    };
    snake.unshift(head);
    snake.pop();
}

function gameLoop(){

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = "20px Georgia";
    context.fillText("Score: " + score, 20, 650);
    context.fillText("Bestest score: " + bestScore, 20, 680);

    drawGrid();
    drawFruit();
    advanceSnake();
    detectCollisionWithWalls();
    detectCollisionWithFruit();
    detectCollisionWithSelf();
    drawSnake();

    if (collision) {
        tick = 300;
        collision = false;
        if (score > bestScore) {
            bestScore = score;
        }
        score = 0;
    }

    eatFruit = false;

    setTimeout(function () {
        window.requestAnimationFrame(gameLoop);
    }, tick)

}

function keyPressed(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (!leftPressed && !movingRight) {
                leftPressed = true;
                resetMovement();
                movingLeft = true;
            }
            break;
        case 'ArrowUp':
            if (!upPressed && !movingDown) {
                upPressed = true;
                resetMovement();
                movingUp = true;
            }
            break;
        case 'ArrowRight':
            if (!rightPressed && !movingLeft) {
                rightPressed = true;
                resetMovement();
                movingRight = true;
            }
            break;
        case 'ArrowDown':
            if (!downPressed && !movingUp) {
                downPressed = true;
                resetMovement();
                movingDown = true;
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
