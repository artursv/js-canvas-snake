import {width, snakeSize, spacing} from "./constants";

class Fruit {
    x;
    y;
    fruitColour = 'darkred';

    generateNewFruit(snake) {

        let possibleX = width - snakeSize - spacing;

        let min = 1;
        let max = possibleX / snakeSize;

        let randomX = Math.floor(Math.random() * (max - min + 1)) + min;
        let randomY = Math.floor(Math.random() * (max - min + 1)) + min;

        this.x = randomX * snakeSize + spacing;
        this.y = randomY * snakeSize + spacing;
        let collidesWithSnake = false;

        snake.parts.forEach(snakePart => {
            if (snakePart.x === this.x && snakePart.y === this.y) {
                collidesWithSnake = true;
            }
        })

        if (collidesWithSnake) this.generateNewFruit();

    }

    draw(context) {
        context.fillStyle = this.fruitColour;
        context.fillRect(this.x, this.y, snakeSize, snakeSize)
    }
}

export default Fruit;