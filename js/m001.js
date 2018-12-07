// function pageLoaded(){
	// document.body.innerHTML = '1111';
// }

// window.onload = pageLoaded;

/**
	#1
	window.onload = function(){
		document.body.innerHTML = '1111';
	}

	#2
	window.addEventListener('load', pageLoaded);
*/

window.onload = function(){
	var div = document.querySelector('.some');
	div.onclick = function(){
		div.innerHTML += 'Add text';
	}
	
}