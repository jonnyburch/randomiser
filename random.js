$(document).ready(function(){

	var mediums = "students artists photographers dancers actors bankers";
	var verbs = "looking dancing blinking crowing"
	var subjects = "ponies skulls moths fruit bananas"

	var array1 = mediums.split(" ");
	var array2 = verbs.split(" ");
	var array3 = subjects.split(" ");

	var $rand1 = array1[Math.floor(Math.random() * array1.length)];
	var $rand2 = array2[Math.floor(Math.random() * array2.length)];
	var $rand3 = array3[Math.floor(Math.random() * array3.length)];

	document.querySelector('.array1').innerHTML = $rand1;
	document.querySelector('.array2').innerHTML = $rand2;
	document.querySelector('.array3').innerHTML = $rand3;

});


