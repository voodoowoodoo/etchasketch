$(document).ready(function(){
	drawGrid();

});

//Draws the original 16 x 16 grid
function drawGrid(){
	var count = 0;
	while(count < 17) {
		$(".wrapper").add("<div class ='grid'></div>");
	}
}