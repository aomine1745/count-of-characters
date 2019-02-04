$('p').on('DOMSubtreeModified', function(){
	var char = 0;
	char = $('p').text().length;
	$('.count').val(char);
})