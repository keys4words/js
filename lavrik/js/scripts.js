window.addEventListener('load', function(e){
   
    var inp1 = document.querySelector('.inp1');
    var inp2 = document.querySelector('.inp2');
	var selects = document.querySelectorAll('option');
	var op = document.querySelector('.op');
    var go = document.querySelector('.go');
    var res = document.querySelector('.res');
	
	var refreshInputs = [inp1, inp2];
	
	inp1.addEventListener('input', checkNumberInput);
	inp2.addEventListener('input', checkNumberInput);

    go.addEventListener('click', function(){
		var operation = op.value;
		var result = 0;
		var a = parseFloat(inp1.value);
		var b = parseFloat(inp2.value);
		switch(operation){
			case '+':
				result = a + b;
				break;
			case '-':
				result = a - b;
				break;
			case '*':
				result = a * b;
				break;
			case '/':
				if(b == 0){
					result = 'Dividing by zero';
				}
				result = a / b;
				break;
			default:
				res = 'Unknown operator';
		}
		res.innerHTML = result;
		go.disabled = true;
		
		for(var i = 0; i < refreshInputs.length; i++){
			refreshInputs[i].addEventListener('input', function(){
				// this.value = this.value.replace(/[^\d,]/g, '');
				go.disabled = false;
			});
		}
		
		// this.value = this.value.replace(/[^\d,]/g, '');
		// go.disabled = false;
		// });
    });
	
	function checkNumberInput(){
		var value = this.value;
		//? {0,1}
		//* {0,}
		//+ {1,}
		var pattern = /^(-){0,1}[0-9]*$/;
		if(!pattern.test(value)){
			var newValue = value.replace(/[^0-9]/g, '');
			if(value[0] == '-'){
				newValue = '-' + newValue;
			}
			this.value = newValue;
		}
	}
});

