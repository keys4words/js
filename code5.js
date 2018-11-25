var $app = $('.app')
$app.css('color', 'red')
	.css('font-size', '24px')
	.css('border', '1px solid blue')
	
$('.submit').on('click', function (){
	console.log("clicked");
});

var $square = $('.square');
var enterHandler = function() {
	$square.addClass('active');
}

var leaveHandler = function(){
	$square.removeClass('active');
}

$square.mouseenter(enterHandler)
	.mouseleave(leaveHandler);
	
$('body').on('click', '.byJavsScript', function (){
	console.log('clicked on js element');
})
	
$('body').append('<div class="byJavsScript">Created by JS</div>')

$('p').html('!');	