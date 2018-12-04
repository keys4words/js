<script>
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


function codeToOp(num){
	var res;
	
	if(num == 0){
		res = '+';
	}
	else if(num == 1){
		res = '-';
	}
	else if(num == 2){
		res = '*';
	}
	else if(num == 3){
		res = '/';
	}
	return res;
}

var x, y, op, res, answer;

for(var i = 0; i < 10; i++){
	x = randomInt(3, 15);
	y = randomInt(3, 15);
	code = randomInt(0, 3);
	op = codeToOp(code);
	res = mathOp(x, y, op);
	answer = +prompt(x + ' ' + op + ' ' + y + ' = ?');
	
	if(res == answer){
		console.log('Nice');
	}else{
		console.log('Stupid  ' + x + ' ' + op + ' ' + y + ' = ' + res);
	}
}

</script>