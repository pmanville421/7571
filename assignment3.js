function calculateAverage(){
	
	
	//get the input
	
	var numbers = document.getElementById("numbers").value;
	
	
	//parse our string values
	var numValues = numbers.split(',').map(Number);
	
	//console.log(numValues);
	
	//variable for output
	
	
	var sum = 0;
		
	for (var i = 0; i < numValues.length; i++){
		
		sum += numValues[i];
	}
	
	
	//output to textbox
	
	var average = sum/numValues.length;
	
	console.log(average)
	
	document.getElementById("average").value = average;
}



function sort(){
	
	var names = document.getElementsByTagName("span");

	var arrayNames = [];
	
	for (var i = 0; i < names.length; i++) {
		
		arrayNames[i] = names[i].innerHTML;
		
	}
	
	arrayNames.sort();
	
	//console.log(arrayNames);
	
	
	//output them back
	
	for(var i=0; i<names.length; i++)
	
	{
		names[i].innerHTML = arrayNames[i];
		
	}

	
}




function reverseSort(){
	
		var names = document.getElementsByTagName("span");

	var arrayNames = [];
	
	for (var i = 0; i < names.length; i++) {
		
		arrayNames[i] = names[i].innerHTML;
		
	}
	
	arrayNames.sort();
	
	arrayNames.reverse();
	
	//console.log(arrayNames);
	
	
	
	//output them back
	
	for(var i=0; i<names.length; i++)
	
	{
		names[i].innerHTML = arrayNames[i];
		
	}
	
	
}
