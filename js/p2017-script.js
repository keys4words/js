window.onload = function(){
	document.querySelector('.btnStart').onclick = function(){
		training();
	}
}


function mathOp(a, b, op){
	var res;
	
	switch(op){
		case '+':
			res = a + b;
			break;
		case '-':
			res = a - b;
			break;
		case '*':
			res = a * b;
			break;
		case '/':
			if(b != 0){
				res = a / b;
			} else{
				res = false;
			}
			break;
							
		default:
			res = false;
			
	}
	return res;
	
}

function randomInt(min, max){
	var length = max - min + 1;
	var rand = Math.floor(Math.random() * length) + min;
	return rand;
}

function training(){
	var x, y, op, res, answer, answerStr, good = 0, error = 0, errors = [];
	var variants = ['+', '-', '*', '/'];

	for(var i = 0; i < 5; i++){
		x = randomInt(3, 15);
		y = randomInt(3, 15);
		code = randomInt(0, 3);
		op = variants[randomInt(0, 3)];
		res = mathOp(x, y, op);
	
		do{
			answerStr = prompt(x + ' ' + op + ' ' + y + ' = ?');
			answer = +answerStr;
		}while(answerStr == '' || isNaN(answer));
	
		if(res.toFixed(2) == answer.toFixed(2)){
			good++;
			//console.log('Nice');
		}else{
			error++;
			errors.push('Error  ' + x + ' ' + op + ' ' + y + ' = ' + res.toFixed(2) + ' and your answer was = ' + answerStr);
		}
	}

	document.querySelector('.good').innerHTML = good;
	document.querySelector('.bad').innerHTML = error;

	var divErrors = document.querySelector('.errors');
	divErrors.innerHTML = '';

	// console.log('Good answers = ' + good);
	// console.log('Bad answers = ' + error);
	for(var i = 0; i < errors.length; i++){
		//console.log(errors[i]);
		divErrors.innerHTML += ('<p>' + errors[i] + '</p>');
	}
}

