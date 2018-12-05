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

// var x, y, res, answer;
// for(var i = 0; i < 10; i++){
// 	x = randomInt(3, 15);
// 	y = randomInt(3, 15);
// 	res = x * y;
// 	answer = +prompt(x + ' * ' + y + ' = ?');
// 	if(res == answer){
// 		console.log('Nice guy');
// 	}else{
// 		console.log('Stupid');
// 	}

// }

console.log(mathOp(1, 5, '+'));
console.log(mathOp(1, 5, '-'));
console.log(mathOp(1, 5, '*'));
console.log(mathOp(1, 5, '/'));
</script>