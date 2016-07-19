//Initial script sothat the user starts with a 16 x 16 sketchpad
$(document).ready(function(){
	
	defineGrid(16, 16);
	
});

//defines the paramaters of the grid divs, so that they fit in the wrapper
//the reason that count a surface are in here instead of drawgrid is beacuse of previous version not including a grid refresh button.
function defineGrid(width, height){

	var count = 0;
	var surface = width * height;

	var gridWidth = 320 / width;
	var gridHeight = 320 / height;

	drawGrid(count, surface, gridWidth, gridHeight)


}

//Prompts the user for entering the dimensions for a new grid, and creates that grid
function gridPrompt(){
	var dimension = parseInt(prompt("Enter the width / height for your new grid"));
	
	$(".wrapper").empty(); //clears the existing grid, preparing for the new draw

	defineGrid(dimension, dimension);

}


//Actually draws the grid.
function drawGrid(c, s, w, h){
	
	$(document).ready(function(){


		$(".grid").width(w);
		$(".grid").height(h);

		$(".grid").mouseenter(function(){
			$(this).css("background-color", "black");
		});
	});

	while(c < s) {

		$(".wrapper").append("<div class ='grid'></div>");
		c += 1;
	}
}