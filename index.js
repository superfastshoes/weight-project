// 1. Create a function that will be called when the user clicks on the button element you added to your HTML 	
	//This function should grab the values entered by the user from the input element and 
	//the select element.



//2.The function should then calculate the weight of the user on the selected planet, and show the weight to 
//the user in the p element you added to your HTML.

function calcWeight(){
	var personsWeight = document.getElementById("wtEntered").value;
	var selectedPlanet = document.getElementById("planetOption").value;
	
	if (personsWeight < 1 || isNaN(personsWeight)){
		document.getElementById("finalWeight").innerHTML="Something went wrong, please enter your weight -";
		}else{
		var newWeight = personsWeight * selectedPlanet;
		document.getElementById("finalWeight").innerHTML=newWeight;
		}
}

//Display a picture of the planet selected
var planets = [
	{name: sun, mult: 27.9, href="./"}
]









