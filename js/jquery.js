$(document).ready(function(){
	
	drawGrid(16, 16);

	//Change grid square color permanently when hovering over it.
	$(".grid").mouseenter(function(){
		$(this).css("background-color", "black");

	});	
	
});



//Draws the grid with a given width and height
function drawGrid(width, height){
	var count = 0;
	var surface = width * height;

	var gridWidth = 320 / width;
	var gridHeight = 320 / height;

	$(".grid").css("width", gridWidth);
	$(".grid").css("height", gridHeight);

	while(count < surface) {

		$(".wrapper").append("<div class ='grid'></div>");
		count += 1;
	}
}