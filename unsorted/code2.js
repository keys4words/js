// var changeButton = document.querySelector('.change');

// changeButton.addEventListener('click', function(){
	// alert('button was clicked');
// });

// changeButton.addEventListener('click', function(){
	// alert('button was clicked again');
// });

var firstElement = document.querySelector('.firstElement');
var secondElement = document.querySelector('.secondElement');

firstElement.addEventListener('mouseover', function(){
	secondElement.style.display = 'block'
});

firstElement.addEventListener('mouseout', function(){
	secondElement.style.display = 'none'
});
var container = document.querySelector('.container');
var title = document.createElement('div');
title.className = 'innerDiv'
title.innerHTML = 'This is the title inside div';

//container.appendChild(title);
container.insertBefore(title, container.firstChild);
//container.removeChild(container.firstChild);
//title.remove();

