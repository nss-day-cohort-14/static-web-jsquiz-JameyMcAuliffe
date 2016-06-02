



//Event handlers for button and enter key
var button = document.getElementById("button").addEventListener("click", tree);
var enter = document.getElementById("enter").addEventListener("keyup", function(e) {
	if (e.keyCode === 13) {
		var specs = {};
		specs.height = parseInt(document.getElementById("number").value);
		specs.char = document.getElementById("character").value;
		tree(specs);
	}
});


//tree function taking args from user text input
function tree(specs) {
	var line = "";
	var newLine = "";

  //object keys/values from user input
	specs.height = parseInt(document.getElementById("number").value);
	specs.obj = document.getElementById("character").value;

	//specs.height didn't check properly in the if below
	var heightCheck = document.getElementById("number").value;

  //Check for user input
	if(heightCheck.trim() === "" || specs.obj.trim() === "") {
		alert("Both fields must have a value.");
	}
	
	//variables to provide values for substrings
	var start = 0;
	var end = specs.height; 
	
	//makes a string, forming a right triangle out of the specified character, with every line having same spacing
	for (var i = 1; i <= specs.height; i++) {
		for (var j = 1; j <= specs.height-1; j++) {
			line += " ";
		}
		for (var k = 0; k < 2*i-1; k++){
			line += specs.obj;
		}
		line += "\n";
	}
			
	//makes substrings out of line, cutting out spaces, and putting them into newLne to form the tree
	for (var m = 1; m <= specs.height; m++) {
		newLine += line.substring(start, end);
		newLine += "\n";
		start = (end + 2) + (m - 1);
		end = start + (specs.height + m); 
	}

   console.log(newLine);
};


	
	