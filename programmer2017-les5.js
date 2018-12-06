<script>
function randomInt(min, max){
	var length = max - min + 1;
	var rand = Math.floor(Math.random() * length) + min;
	return rand;
}

function mathOp(a, b, op){
	var res;
	if(op == '+'){
		res = a + b;
	}
	else if(op == '-'){
		res = a - b;
	}
	else if(op =='*'){
		res = a * b;
	}else if(op == '/'){
		if(b == 0){
			res = false;
		} else{
			res = a/b;
		}
		
	}else{
		res = false;
	}
	return res;
}

function codeToOp(num){
	
	return variants[num];
}

var x, y, res, op, answer, answerStr;
var variants = ['+', '-', '*', '/'];

for(var i = 0; i < 10; i++){
	x = randomInt(3, 15);
	y = randomInt(3, 15);
	op = variants[randomInt(0, 3)];
	res = mathOp(x, y, op);
	
	
	do{
		answerStr = prompt(x + ' ' + op + ' ' + y + ' = ?'); 
		answer = +answerStr;
	}while(answerStr == '' || isNaN(answer));

	if(res.toFixed(2) == answer.toFixed(2)){
		console.log('Nice guy');
	}else{
		console.log('Stupid ' + x + ' ' + op + ' ' + y + ' = ' + res.toFixed(2));
	}
}

// console.log(mathOp(1, 5, '+'));
// console.log(mathOp(1, 5, '-'));
// console.log(mathOp(1, 5, '*'));
// console.log(mathOp(1, 5, '/'));
</script>