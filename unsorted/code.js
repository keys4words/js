function changeColor(){
	/* var element = document.getElementById('paragraph')
	console.log(
		'Clicked on button', 
		element.style
		)
		
	element.style.color = 'red'
	element.style.fontSize = '1.5em' */
	// var elements = document.getElementsByClassName('myClass')
	// // console.log(elements)
	// for(var i = 0; i < elements.length; i++){
			// elements[i].style.color = 'red'
			// elements[i].style.fontStyle = 'italic'
	// }
	
	// var element = document.querySelector('#paragraph')
	// element.style.color = 'red'
	
	// var elements = document.querySelectorAll('.myClass p:last-child')
	// for(var i = 0; i < elements.length; i++){
		// elements[i].style.color = 'red'
	// }
	
	// var firstContainer = document.querySelector('.myClass p');
	// var secondContainer = document.querySelector('.container1');
	// var content = firstContainer.innerHTML.trim();
	// //console.log(content);
	// secondContainer.innerHTML = content;
	
	var elements = document.querySelectorAll('.drinks')
	var drinks = []
	for(var i = 0; i < elements.length; i++){
		var content = elements[i].innerHTML.trim()
		drinks.push(content)
	}
		console.log(drinks)
	
	
}