const CELL_SIZE = 20;
// Soal no 1: Set canvas size menjadi 600
const CANVAS_SIZE = 600;
const REDRAW_INTERVAL = 50;
const WIDTH = CANVAS_SIZE / CELL_SIZE;
const HEIGHT = CANVAS_SIZE / CELL_SIZE;
 body-snake
//menambahkan menajdi kepala ular

 snake-life
//menambahkan menjadi kepala ular
 main
const foodImg = new Image();
foodImg.src = "apple.png";
const kepala = new Image();
kepala.src = "ular.png";
const bodi = new Image();
bodi.src = "body.png";
//sampai sini
 body-snake


main
 main
const DIRECTION = {
    LEFT: 0,
    RIGHT: 1,
    UP: 2,
    DOWN: 3,
}
// Soal no 2: Pengaturan Speed (semakin kecil semakin cepat) ubah dari 150 ke 120
const MOVE_INTERVAL = 120;
let countEatApple = 0;
let level = 1;
body-snake

 snake-life
let nyawa = 3;

 main
 main

function initPosition() {
    return {
        x: Math.floor(Math.random() * WIDTH),
        y: Math.floor(Math.random() * HEIGHT),
    }
}

 body-snake
function initHeadAndBody() {
    let head = initPosition();
    let body = [{ x: head.x, y: head.y }];
    return {
        head: head,
        body: body,
    }

function initHeadAndBody(type) {
    console.log("type", type)
    if (type === "snake") {
        let head = initPosition();
        let body = [{ x: head.x, y: head.y }];
        return {
            head: head,
            body: body,
        }
    } else {
        let head = initPosition();
        let body = [{ x: head.x, y: head.y }, { x: head.x, y: head.y + 1 }, { x: head.x, y: head.y + 2 }, { x: head.x, y: head.y + 3 }, { x: head.x, y: head.y + 4 }, { x: head.x, y: head.y + 5 }, { x: head.x, y: head.y + 6 }];

        return {
            head: head,
            body: body,
        }
    }

 main
}

function initDirection() {
    return Math.floor(Math.random() * 4);
}

 body-snake
function initSnake(color) {
    return {
        color: color,
        ...initHeadAndBody(),

function initSnake(color, type) {
    return {
        color: color,
        ...initHeadAndBody(type),
 main
        direction: initDirection(),
        score: 0,
    }
}
 body-snake
let snake1 = initSnake("purple");
let snake2 = initSnake("blue");
// Soal no 6: add snake3
let snake3 = initSnake("black");

let snake1 = initSnake("purple", "snake");
let snake2
// Soal no 6: add snake3
let snake3
 main

// Soal no 4: make apples array
let apples = [{
    color: "red",
    position: initPosition(),
},
{
    color: "green",
    position: initPosition(),
}]

 body-snake

snake-life
// function drawCell(ctx, x, y, color) {
//     ctx.fillStyle = color;
//     ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
// }
function drawCell(context, x, y, color, type) {
    if (type === "snake") {
        context.beginPath();
        context.fillStyle = color;

        context.arc(x * CELL_SIZE + 10, y * CELL_SIZE + 10, CELL_SIZE / 2, 0, 2 * Math.PI);
        context.fill();
    } else {
        context.fillStyle = color;
        context.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
}



  main
function drawCell(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

 body-snake

 main
 main
// Soal no 6: Pada fungsi drawScore, tambahkan score3Board:
function drawScore(snake) {
    let scoreCanvas;
    if (snake.color == snake1.color) {
        scoreCanvas = document.getElementById("score1Board");
    } else if (snake.color == snake2.color) {
        scoreCanvas = document.getElementById("score2Board");
    } else {
        scoreCanvas = document.getElementById("score3Board");
    }
    let scoreCtx = scoreCanvas.getContext("2d");

    scoreCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    scoreCtx.font = "30px Arial";
    scoreCtx.fillStyle = snake.color
 body-snake
    scoreCtx.fillText(snake.score, 10, scoreCanvas.scrollHeight / 2);

 snake-life
    scoreCtx.fillText(`${snake.score}`, 10, scoreCanvas.scrollHeight / 2);

    scoreCtx.fillText(snake.score, 10, scoreCanvas.scrollHeight / 2);
 main
 main
}

function draw() {
    setInterval(function () {
        let snakeCanvas = document.getElementById("snakeBoard");
        let ctx = snakeCanvas.getContext("2d");

        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
 body-snake
        // yang diubah drawcell menjadi ctx.drawImage()
        ctx.drawImage(kepala, snake1.head.x * CELL_SIZE, snake1.head.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        //loop 
        
        for (let i = 1; i < snake1.body.length; i++) {
            ctx.drawImage(bodi, snake1.body[i].x * CELL_SIZE , snake1.body[i].y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }

        for (let i = 1; i < snake2.body.length; i++) {
            ctx.drawImage(bodi, snake2.body[i].x * CELL_SIZE, snake2.body[i].y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }

        // Soal no 6: Draw Player 3
        for (let i = 1; i < snake3.body.length; i++) {
            ctx.drawImage(bodi, snake3.body[i].x * CELL_SIZE, snake3.body[i].y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

snake-life
        // yang diubah drawcell menjadi ctx.drawImage()
        ctx.drawImage(kepala, snake1.head.x * CELL_SIZE, snake1.head.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

        for (let i = 1; i < snake1.body.length; i++) {
            ctx.drawImage(bodi, snake1.body[i].x * CELL_SIZE, snake1.body[i].y * CELL_SIZE, CELL_SIZE, CELL_SIZE);


        drawCell(ctx, snake1.head.x, snake1.head.y, snake1.color);
        for (let i = 1; i < snake1.body.length; i++) {
            drawCell(ctx, snake1.body[i].x, snake1.body[i].y, snake1.color);
 main
 main
        }

        for (let i = 0; i < apples.length; i++) {
            let apple = apples[i];

            // Soal no 3: DrawImage apple dan gunakan image id:
            var img = document.getElementById("apple");
            ctx.drawImage(img, apple.position.x * CELL_SIZE, apple.position.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
 body-snake

        drawScore(snake1);
        drawScore(snake2);
        // Soal no 6: Draw Player 3 Score:
        drawScore(snake3);

 snake-life
        for (let i = 0; i < nyawa; i++) {
            // Soal no 3: DrawImage apple dan gunakan image id:
            var heart = document.getElementById("heart");
            ctx.drawImage(heart, 25 * i, 0, CELL_SIZE, CELL_SIZE);
        }
        ctx.font = "20px Arial";
        ctx.fillText(`(level ${level})`, 0, 595);
        // }
        //         ctx.drawImage(heart, 0, 0, CELL_SIZE, CELL_SIZE);

 main
        if (level > 1) {
            let snakeCanvas = document.getElementById("snakeBoard");
            let ctx = snakeCanvas.getContext("2d");

 snake-life
            drawCell(ctx, snake2.head.x, snake2.head.y, snake2.color, "block");
            for (let i = 1; i < snake2.body.length; i++) {
                drawCell(ctx, snake2.body[i].x, snake2.body[i].y, snake2.color, "block");
            }

            // Soal no 6: Draw Player 3
            drawCell(ctx, snake3.head.x, snake3.head.y, snake3.color, "block");
            for (let i = 1; i < snake3.body.length; i++) {
                drawCell(ctx, snake3.body[i].x, snake3.body[i].y, snake3.color, "block");

            drawCell(ctx, snake2.head.x, snake2.head.y, snake2.color);
            for (let i = 1; i < snake2.body.length; i++) {
                drawCell(ctx, snake2.body[i].x, snake2.body[i].y, snake2.color);
            }

            // Soal no 6: Draw Player 3
            drawCell(ctx, snake3.head.x, snake3.head.y, snake3.color);
            for (let i = 1; i < snake3.body.length; i++) {
                drawCell(ctx, snake3.body[i].x, snake3.body[i].y, snake3.color);
 main
            }
        }
        drawScore(snake1);
        // drawScore(snake2);
        // Soal no 6: Draw Player 3 Score:
        // drawScore(snake3);
 main
    }, REDRAW_INTERVAL);
}

function teleport(snake) {
    if (snake.head.x < 0) {
        snake.head.x = CANVAS_SIZE / CELL_SIZE - 1;
    }
    if (snake.head.x >= WIDTH) {
        snake.head.x = 0;
    }
    if (snake.head.y < 0) {
        snake.head.y = CANVAS_SIZE / CELL_SIZE - 1;
    }
    if (snake.head.y >= HEIGHT) {
        snake.head.y = 0;
    }
}

// Soal no 4: Jadikan apples array
function eat(snake, apples) {
    for (let i = 0; i < apples.length; i++) {
        let apple = apples[i];
        if (snake.head.x == apple.position.x && snake.head.y == apple.position.y) {
            var audio = new Audio('eat-appel.wav');
            audio.play();
            apple.position = initPosition();
            snake.score++;
            countEatApple++;
            snake.body.push({ x: snake.head.x, y: snake.head.y });
            if (countEatApple === 5) {
                countEatApple = 0
                level++;
                var audio = new Audio('level-up.wav');
                audio.play();
                setTimeout(() => {
                    alert(`Level up, selamat kamu berhasil ke level selanjutnya ${level}`);
                }, 300)
            }
            if (level === 5) {
                // final game
                level = 1;
                countEatApple = 0
                var audio = new Audio('final-game.wav');
                audio.play();
                setTimeout(() => {
                    alert("Game selesai");
                }, 300)
                countEatApple = 0
                level = 1
 body-snake
                snake1 = initSnake("purple");
                snake2 = initSnake("blue");
                let snake3 = initSnake("black");

                snake1 = initSnake("purple", "snake");
                snake2 = initSnake("black", "block");
                snake3 = initSnake("black", "block");
            }
            if (level > 1) {
                snake2 = initSnake("black", "block");
                // Soal no 6: add snake3
                snake3 = initSnake("black", "block");
 main
            }
        }
    }
}

function moveLeft(snake) {
    snake.head.x--;
    teleport(snake);
    eat(snake, apples);
}

function moveRight(snake) {
    snake.head.x++;
    teleport(snake);
    eat(snake, apples);
}

function moveDown(snake) {
    snake.head.y++;
    teleport(snake);
    eat(snake, apples);
}

function moveUp(snake) {
    snake.head.y--;
    teleport(snake);
    eat(snake, apples);
}

function checkCollision(snakes) {
    let isCollide = false;
    //this
 body-snake
    for (let i = 0; i < snakes.length; i++) {
        for (let j = 0; j < snakes.length; j++) {
            for (let k = 1; k < snakes[j].body.length; k++) {
                if (snakes[i].head.x == snakes[j].body[k].x && snakes[i].head.y == snakes[j].body[k].y) {

    for (let i = 0; i < snakes?.length; i++) {
        for (let j = 0; j < snakes?.length; j++) {
            for (let k = 1; k < snakes[j]?.body.length; k++) {
                if (snakes[i]?.head.x == snakes[j]?.body[k].x && snakes[i]?.head.y == snakes[j]?.body[k].y) {
 main
                    isCollide = true;
                }
            }
        }
    }
    if (isCollide) {
 body-snake

 snake-life
        nyawa--;
        // Soal no 5: Add game over audio:
        if (nyawa === 0) {
            var audio = new Audio('game-over.wav');
            audio.play();
            setTimeout(() => {
                alert("Game over");
            }, 300)
            nyawa = 3
            level = 1
        }
        countEatApple = 0

 main
        // Soal no 5: Add game over audio:
        var audio = new Audio('game-over.wav');
        audio.play();
        setTimeout(() => {
            alert("Game over");
        }, 300)
        countEatApple = 0
        level = 1
 body-snake
        snake1 = initSnake("purple");
        snake2 = initSnake("blue");

 main
        snake1 = initSnake("purple", "snake");
        snake2 = initSnake("black", "block");
        snake3 = initSnake("black", "block");
 main
    }
    return isCollide;
}

function move(snake) {
    switch (snake.direction) {
        case DIRECTION.LEFT:
            moveLeft(snake);
            break;
        case DIRECTION.RIGHT:
            moveRight(snake);
            break;
        case DIRECTION.DOWN:
            moveDown(snake);
            break;
        case DIRECTION.UP:
            moveUp(snake);
            break;
    }
    moveBody(snake);
    // Soal no 6: Check collision dengan snake3
    if (!checkCollision([snake1, snake2, snake3])) {
        setTimeout(function () {
            move(snake);
        }, MOVE_INTERVAL);
    } else {
        initGame();
    }
}

function moveBody(snake) {
    snake.body.unshift({ x: snake.head.x, y: snake.head.y });
    snake.body.pop();
}

function turn(snake, direction) {
    const oppositeDirections = {
        [DIRECTION.LEFT]: DIRECTION.RIGHT,
        [DIRECTION.RIGHT]: DIRECTION.LEFT,
        [DIRECTION.DOWN]: DIRECTION.UP,
        [DIRECTION.UP]: DIRECTION.DOWN,
    }

    if (direction !== oppositeDirections[snake.direction]) {
        snake.direction = direction;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        turn(snake1, DIRECTION.LEFT);
    } else if (event.key === "ArrowRight") {
        turn(snake1, DIRECTION.RIGHT);
    } else if (event.key === "ArrowUp") {
        turn(snake1, DIRECTION.UP);
    } else if (event.key === "ArrowDown") {
        turn(snake1, DIRECTION.DOWN);
    }

    if (event.key === "a") {
        turn(snake2, DIRECTION.LEFT);
    } else if (event.key === "d") {
        turn(snake2, DIRECTION.RIGHT);
    } else if (event.key === "w") {
        turn(snake2, DIRECTION.UP);
    } else if (event.key === "s") {
        turn(snake2, DIRECTION.DOWN);
    }

    // Soal no 6: Add navigation snake3:
    if (event.key === "j") {
        turn(snake3, DIRECTION.LEFT);
    } else if (event.key === "l") {
        turn(snake3, DIRECTION.RIGHT);
    } else if (event.key === "i") {
        turn(snake3, DIRECTION.UP);
    } else if (event.key === "k") {
        turn(snake3, DIRECTION.DOWN);
    }
})

function initGame() {
    move(snake1);
    // move(snake2);
    // move(snake3);
}

initGame();