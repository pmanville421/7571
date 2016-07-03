function calculateBMI(){
    
    //get the age value
    
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);
    
    //variable for outputs
    
    var bmi; 
    var personalMessage = document.getElementById("personalMessage");
    
	
	//default table colors
	
	document.getElementById('a').style.backgroundColor = 'white';
	document.getElementById('b').style.backgroundColor = 'white';
	document.getElementById('c').style.backgroundColor = 'white';
	document.getElementById('d').style.backgroundColor = 'white';
    
	
	
    //this will start our conditionals
    
    bmi = Math.round((weight * 703)/(height * height));
    
	
    //Output to Textbox
    
    document.getElementById("bmi").value = bmi;
    
	
	if (bmi < 18.5) {
		
		personalMessage.innerHTML = 
		"You are underweight.  A lean BMI can indicate that your weight maybe too low. You should consult your physician to determine if you should gain weight, as low body mass can decrease your body's immune system, which could lead to ilness such as disappearance of periods (women), bone loss, malnutrition and other conditions. The lower your BMI the greater these risks become."
		
		document.getElementById('a').style.backgroundColor = '#0066cc';		
		
	} else if (bmi > 18.5 && bmi < 24.9) {
		
		personalMessage.innerHTML = 
		"Congratulations!  You're normal weight.  People whose BMI is within 18.5 to 24.9 possess the ideal amount of body weight, associated with living longest, the lowest incidence of serious ilness, as well as being perceived as more physically attractive than people with BMI in higher or lower ranges. However, it may be a good idea to check your Waist Circumference and keep it within the recommended limits."
		
		document.getElementById('b').style.backgroundColor = '#33cc33';
		
	} else if (bmi > 25 && bmi < 29.9) {
		
		personalMessage.innerHTML = 
		"You are overweight.  People falling in this BMI range are considered overweight and would benefit from finding healthy ways to lower their weight, such as diet and exercise. Individuals who fall in this range are at increased risk for a variety of ilnesses. If your BMI is 27-29.99 your risk of health problems becomes higher. In a recent study an increased rate of blood pressure, diabetes and heart disease was recorded at 27.3 for women and 27.8 for men. It may be a good idea to check your Waist Circumference and compare it with the recommended limits."	
		
		document.getElementById('c').style.backgroundColor = '#ffff00';
			
	} else {
		
		personalMessage.innerHTML =
		"You are obese.  Individuals with a BMI of 30 or greater are in a physically unhealthy condition, which puts them at risk for serious illnesses such as heart disease, diabetes, high blood pressure, gall bladder disease, and some cancers. This holds especially true if you have a larger than recommended Waist Size. These people would benefit greatly by modifying their lifestyle. Ideally, see your doctor and consider reducing your weight. The reduction will result in considerable health improvements."
		
		document.getElementById('d').style.backgroundColor = '#ff3300';
			
	} 
	
}



//Reset button function

function resetMsg() {
	
	var personalMessage = document.getElementById("personalMessage");
	
	personalMessage.innerHTML = ""
	
	document.getElementById('a').style.backgroundColor = 'white';
	document.getElementById('b').style.backgroundColor = 'white';
	document.getElementById('c').style.backgroundColor = 'white';
	document.getElementById('d').style.backgroundColor = 'white';
	
}

//Check if letter entered 

/*function validate() {
	
  var x = document.forms["measurements"]["height"].value;
	
  var y = document.forms["measurements"]["weight"].value;	
	
  if (x==null || y==null)
	
      {
		  
      alert("Please check that you entered your measurements correctly and nothing is blank.");
      return false;
		  
      }
	
  if (isNaN(x))
	  
  {
    alert("Must input numerical value for Height.");
	  
    return false;
	  
  }
	
if (isNaN(y))
	  
  {
	  
    alert("Must input a numerical value for Weight.");
	  
    return false;
	  
  }	
	
}*/
