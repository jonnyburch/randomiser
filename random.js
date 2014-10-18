$(document).ready(function(){
	
	var array1 = ['Moths', 'Skulls', 'Winter'];

	var $rand1 = array1[Math.floor(Math.random() * array1.length)];

	$('#randomise').onClick(function(){
		$('#array1').append($rand1);
	});

});


