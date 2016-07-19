$(document).ready(function(){
	drawGrid();

});

//Draws the original 16 x 16 grid
function drawGrid(){
	var count = 0;
	while(count < 16) {
		$(".wrapper").append("<div class ='grid'></div>");
		count += 1;
	}
}