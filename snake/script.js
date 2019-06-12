//создаем поле игры

var field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

//разбиваем поле на ячейки

for (var i=1; i<5001; i++) {
	var excel = document.createElement('div');
	field.appendChild(excel);
	excel.classList.add('excel');
}

//присваиваем каждой яячейке координаты x и y

var excel = document.getElementsByClassName('excel');
var x = 1,
	y = 50;

for (var i = 0; i<excel.length; i++) {
	if (x>100) {
		x=1;
		y--;
	}
	excel[i].setAttribute('data-posX', x);
	excel[i].setAttribute('data-posY', y);
	x++;
}

//создаем саму змейку

function generateSnake() {
	var posX = Math.round(Math.random() * (100 - 3) + 3);
	var posY = Math.round(Math.random() * (50 - 1) + 1);
	return [posX, posY];
}

var coordinates = generateSnake();
var snake = [document.querySelector('[data-posX = "' + coordinates[0] + '"][data-posY = "' + coordinates[1] + '"]'), document.querySelector('[data-posX = "' + (coordinates[0]-1) + '"][data-posY = "' + coordinates[1] + '"]'), document.querySelector('[data-posX = "' + (coordinates[0]-2) + '"][data-posY = "' + coordinates[1] + '"]')];

for (var i = 0; i<snake.length; i++) {
	snake[i].classList.add('snake')
}

// создаем яблоко и запрещаем ему появлятся "в змее"

var apple;

function createApple() {
	function generateApple() {
	var posX = Math.round(Math.random() * (100 - 3) + 3);
	var posY = Math.round(Math.random() * (50 - 1) + 1);
	return [posX, posY];
	}

	var appleCoordinates = generateApple();
	apple = document.querySelector('[data-posX = "' + appleCoordinates[0] + '"][data-posY = "' + appleCoordinates[1] + '"]');

	while (apple.classList.contains('snake')) {
		var appleCoordinates = generateApple();
	apple = document.querySelector('[data-posX = "' + appleCoordinates[0] + '"][data-posY = "' + appleCoordinates[1] + '"]');
	}

	apple.classList.add('apple')
}

createApple();

// переменная для определения направления движения

var direction = 'right';

// переменная для фикса бага с быстрым нажатием стрелок

var steps = false;

// отображаем кол-во очков

var input = document.createElement('input');
document.body.appendChild(input);
input.style.cssText = 'margin: auto; margin-top: 40px; font-size: 30px; display: block; textTransform: uppercase;';

var score = 0
input.value = 'Ваши очки: ' +  score;
// учим змею двигаться

function move() {
	var snakeCoordinates = [snake[0].getAttribute('data-posX'), snake[0].getAttribute('data-posY')];
	snake[0].classList.remove('snake');
	snake[snake.length-1].classList.remove('snake');
	snake.pop();

	if (direction == 'right') {
		if(snakeCoordinates[0] < 100) {
		snake.unshift(document.querySelector('[data-posX = "' + (+snakeCoordinates[0] + 1) + '"][data-posY = "' + snakeCoordinates[1] + '"]'));
		} else {
			snake.unshift(document.querySelector('[data-posX = "1"][data-posY = "' + snakeCoordinates[1] + '"]'));
		}
	} else if (direction == 'left') {
		if(snakeCoordinates[0] > 1) {
		snake.unshift(document.querySelector('[data-posX = "' + (+snakeCoordinates[0] - 1) + '"][data-posY = "' + snakeCoordinates[1] + '"]'));
		} else {
			snake.unshift(document.querySelector('[data-posX = "100"][data-posY = "' + snakeCoordinates[1] + '"]'));
		}
	} else if (direction == 'up') {
		if(snakeCoordinates[1] < 50) {
		snake.unshift(document.querySelector('[data-posX = "' + snakeCoordinates[0]+ '"][data-posY = "' + (+snakeCoordinates[1]+1) + '"]'));
		} else {
			snake.unshift(document.querySelector('[data-posX = "' + snakeCoordinates[0]+ '"][data-posY = "1"]'));
		}
	} else if (direction == 'down') {
		if(snakeCoordinates[1] > 1) {
		snake.unshift(document.querySelector('[data-posX = "' + snakeCoordinates[0] + '"][data-posY = "' + (snakeCoordinates[1]-1) + '"]'));
		} else {
			snake.unshift(document.querySelector('[data-posX = "' + snakeCoordinates[0]+ '"][data-posY = "50"]'));
		}
	}
	
	// учим змею есть яблоки

	if (snake[0].getAttribute('data-posX') == apple.getAttribute('data-posX') && snake[0].getAttribute('data-posY') == apple.getAttribute('data-posY')) {
		apple.classList.remove('apple');
		var a =snake[snake.length-1].getAttribute('data-posX');
		var b =snake[snake.length-1].getAttribute('data-posY');
		snake.push(document.querySelector('[data-posX = "' + a +'"][data-posY = "' + b +'"]'));
		createApple();
		score++;
		input.value = 'Ваши очки: ' +  score;
	}

	if (snake[0].classList.contains('snake')) {
		clearInterval(interval);
		snake[0].style.backgroundColor = 'red'
		setTimeout(() => {
			alert('Вы проиграли!');
		}, 300);
	}

	snake[0].classList.add('snake');
	for (var i = 0; i<snake.length; i++) {
	snake[i].classList.add('snake')
	}

	steps =true
}

var interval = setInterval(move, 100);

// меняем направление движения

window.addEventListener('keydown', function (e) {
	if (steps == true) {
		if (e.keyCode ==37 && direction != 'right') {
			direction = 'left';
			steps = false;
		}
		else if (e.keyCode ==38 && direction != 'down') {
			direction = 'up';
			steps = false;
		}
		else if (e.keyCode ==39 && direction != 'left') {
			direction = 'right';
			steps = false;
		}
		else if (e.keyCode ==40 && direction != 'up') {
			direction = 'down';
			steps = false;
		}
	}	
});
