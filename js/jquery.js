$(document).ready(function(){
	drawGrid(16, 16);
});

//Draws the grid with a given width and height
function drawGrid(width, height){
	var count = 0;
	var surface = width * height;
	while(count < surface) {

		$(".wrapper").append("<div class ='grid'></div>");
		count += 1;
	}
}