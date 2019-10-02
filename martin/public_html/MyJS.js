//глобальные переменные:
var FIELD_SIZE_X=20;//строки
var	FIELD_SIZE_Y=20;//столбцы
var	SNAKE_SPEED=300;//интервал между перемещениями
var snake=[];//сама змейка
var	direction='y+';//направление движения змейки
var	gameIsRunning=false;//запущена ли игра
var	snake_timer;//таймер змейки
var	food_timer;//таймер для еды
var score=0;//рузльтат

function init(){
	prepareGmaeField(); //генерация поля

	var wrap=document.getElementByClassName('wrap')[0];

	wrap.style.width='400px';
	//события кнопок "Старт" и "Новая игра"
	document.getElementById('snake-start').addEventListener('click', startGame);
	document.getElementById('snake-renew').addEventListener('click', refreshGame);

//отслеживаение клавиш клавиатуры
	addEventListener('keydown', changeDirection);
}

/**
 * функция генерации игрового поля
 */
function prepareGameField(){
	//создаем таблицу
	var game_table=document.createElement('table');
	game_table.steAttrebute('class', 'game-table');

	//генерация ячеен игровой таблицы
	for(ver i=0; i<FIELD_SIZE_X; i++){
		//создание строки
		var row=document.createElement('tr');
		row.className='game-table-row row-'+i;

		for(var j=0; j<FIELD_SIZE_Y; j++){
			//создание ячейки
			var cell=document.createElement('td');
			cell.className='game-table-cell cell-'+i+'-'+j;

			row.appendChild(cell);//добавление ячейки
		}
		game_table.appendChild(row);//добавление сторки
	}

	document.getElementById('snake-field').appendChild(game_table);//добавление таблицы
}

/**
 * старт игры
 */
function startGame(){
 	gameIsRunning=true;
 	respawn();//создали змейку

 	snake_timer=setinterval(move, SNAKE_SPEED);
 	setTomeout(createFood, 5000);
}

 /*
  * функция расположения змейки на игровом поле
  */
function respawn(){
  	//змейка - массив td
  	//стартовая длина змейки = 2

  	//respawn змейки из центра
  	var start_coord_x=Math.floor(FIELD_SIZE_X/2);
  	var start_coord_y=Math.floor(FIELD_SIZE_Y/2);

  	//голова змейки
  	var snake_head=document.getElementByClassName('cell-'+start_coord_y+'-'start_coord_x)[0];
  	snake_head.steAttrebute('class', snake_head.getAttribute('class')+'snake-unit');
  	//тело змейки
  	var snake_tail=document.getElementByClassName('cell-'+(start_coord_y-1)+'-'+start_coord_x)[0];
  	snake_tail.steAttrebute('class', snake_tail.getAttribute('class')+'snake-unit');

  	snake.push(snake_head);
  	snake.push(snake_tail);
}

/*
 *движение змейки 
 */
function move(){
	//console.log('move', direction);
	// сборка классов
	var snake_head_classes=snake[snake.length-1].getAttribute('class').split(' ');

	//сдвиг головы
	var new_unit;
	var snake_coords=snake_head_classes[1].split('-');
	var coord_y=parseInt(snake_coords[1]);
	var coord_x=parseInt(snake_coords[2]);

	//определяем новую точку
	if(direction=='x-'){

		new_unit=document.getElementByClassName('cell-'+(coord_y)+'-'+(coord_x-1))[0];
	}
	else if(direction=='x+'){
		new_unit=document.getElementByClassName('cell-'+(coord_y)+'-'+(coord_x+1))[0];
	}
	else if(direction=='y+'){
		new_unit=document.getElementByClassName('cell-'+(coord_y-1)+'-'+(coord_x))[0];
	}
	else if(direction=='y-'){
		new_unit=document.getElementByClassName('cell-'+(coord_y+1)+'-'+(coord_x))[0];
	}	
}
//проверки
//1) new_unit не часть змейки
//2) змейка не ушла за границу поля
//console.log(new_unit);
if(!isSnakeUnit(new_unit)&&new_unit!==undefined){
	
}