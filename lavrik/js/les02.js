window.addEventListener('load', function(e){
	var links = document.querySelectorAll('a[target=_blank]');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function(e){
			
			e.preventDefault();
		});
		// links[i].onclick = function(e){
		// 	return false;
		// };
	}
});