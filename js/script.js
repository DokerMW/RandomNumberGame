'use strict';

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num) && /^\S+$/.test(num);
}

function guessNumberGame(min, max) {
	let randomNumber;
	let userNumber;
	let answerCounter = 10;
	
	const getUserNumber = () => {
		userNumber = prompt('Введите число от 1 до 100!');
	}

	const newGame = (msg) => {
		const newGameQst = confirm(msg);
		if(newGameQst == true){
			return guessNumberGame(1, 100);
		} else {
			return alert('Игра закончена!');
		}
	}

	randomNumber =  Math.ceil(Math.random() * (max - min) + min);

	const checkUserNumber = () =>{
		if(userNumber == null){
			return alert('Игра закончена!');
		}
		if(answerCounter == 1){
			return newGame(`Вы не угадали загаданное число ${randomNumber}! Хотите сыграть еще?`);

		}
		if(!isNumber(userNumber)){
			alert('Допустим ввод только цифр! Без букв и пробелов.');
			return wrongInput();
		} else{
			if(userNumber == randomNumber){
				answerCounter -= 1;
				return newGame(`Поздравляем! Вы угадали загаданное число ${randomNumber}! Попыток осталось ${answerCounter}! Хотите сыграть еще?`);
			} else if (userNumber > randomNumber){
				answerCounter -= 1;
				alert(`Загаданное число меньше! Осталось попыток ${answerCounter}`);
				return wrongInput();
			} else if (userNumber < randomNumber){
				answerCounter -= 1;
				alert(`Загаданное число больше! Осталось попыток ${answerCounter}`);
				return wrongInput();
			}
		}
	}

	const wrongInput = ()=>{
		getUserNumber();
		checkUserNumber();
	}

	getUserNumber();
	checkUserNumber();
}

guessNumberGame(1, 100);


