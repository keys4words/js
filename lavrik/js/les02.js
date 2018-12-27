window.addEventListener('load', function(e){
	var links = document.querySelectorAll('a[target=_blank]');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function(e){
			if (!confirm('Are you sure?')) {
				e.preventDefault();

			}
		});
	}

	var images = document.querySelectorAll('img');
	for (var i = 0; i < images.length; i++) {
		images[i].addEventListener('contextmenu', function(e){
			e.preventDefault();
		});
		images[i].addEventListener('mousedown', function(e){
			e.preventDefault();
		});
	}

});