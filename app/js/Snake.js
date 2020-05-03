import SnakePart from "./SnakePart";

import {height, width, spacing, snakeSize} from "./constants";

class Snake {

    initSnakeSize = 5;

    snakeColour = 'black';
    parts = [];

    movingUp = false;
    movingDown = false;
    movingLeft = false;
    movingRight = false;

    collision = false;

    eatFruit = false;

    tick = 300;

    init() {
        this.resetMovement();
        this.parts = [];
        let i = 0;
        let posX = 25;
        let posY = 25;
        while (i < this.initSnakeSize) {
            this.parts.unshift(new SnakePart(posX, posY))
            posX += snakeSize + spacing;
            i++;
        }
    }

    draw(context) {
        this.parts.forEach((snakePart) => {
            this.drawSnakePart(context, snakePart)
        });
    }

    drawSnakePart(context, snakePart) {
        context.fillStyle = this.snakeColour;
        context.fillRect(snakePart.x, snakePart.y, snakeSize, snakeSize)
    }

    advanceSnake() {
        if (this.movingUp) {
            let head = {
                x: this.parts[0].x,
                y: this.parts[0].y - (snakeSize + spacing),
            };
            this.parts.unshift(head);
            this.parts.pop();
        }
        if (this.movingRight) {
            let head = {
                x: this.parts[0].x + (snakeSize + spacing),
                y: this.parts[0].y,
            };
            this.parts.unshift(head);
            this.parts.pop();
        }
        if (this.movingDown) {
            let head = {
                x: this.parts[0].x,
                y: this.parts[0].y + (snakeSize + spacing),
            };
            this.parts.unshift(head);
            this.parts.pop();
        }
        if (this.movingLeft) {
            let head = {
                x: this.parts[0].x - (snakeSize + spacing),
                y: this.parts[0].y,
            };
            this.parts.unshift(head);
            this.parts.pop();
        }
    }

    resetMovement() {
        this.movingUp = false;
        this.movingDown = false;
        this.movingRight = false;
        this.movingLeft = false
    }

    detectCollisionWithWalls() {
        let head = this.parts[0];

        let totalSize = snakeSize + spacing;

        if (
            head.x > width - totalSize ||
            head.y > height - totalSize ||
            head.y < 0 || head.x < 0
        ) {
            this.init();
            this.movingRight = true;
            this.collision = true;
        }
    }

    detectCollisionWithFruit(fruit, score) {
        let head = this.parts[0];

        if (head.x === fruit.x && head.y === fruit.y) {
            this.eatFruit = true;
            fruit.generateNewFruit(this);

            let newHead = {}

            if (this.movingUp) {
                newHead.x = head.x;
                newHead.y = head.y - snakeSize - spacing;
            }
            if (this.movingDown) {
                newHead.x = head.x;
                newHead.y = head.y + snakeSize + spacing;
            }
            if (this.movingRight) {
                newHead.x = head.x + snakeSize + spacing;
                newHead.y = head.y;
            }
            if (this.movingLeft) {
                newHead.x = head.x - snakeSize - spacing;
                newHead.y = head.y;
            }
            this.parts.unshift(newHead);
            this.tick = this.tick - (this.tick/100)*5;
            return score + 1;
        }
        else {
            return score;
        }
    }

    detectCollisionWithSelf() {
        let head = this.parts[0];
        let tail = this.parts;

        tail = tail.slice(1);

        tail.forEach((snakeSection) => {
            if (snakeSection.x === head.x && snakeSection.y === head.y) {
                this.resetMovement();
                this.init();
                this.movingRight = true;
                this.collision = true;
            }
        });
    }
    
}

export default Snake;