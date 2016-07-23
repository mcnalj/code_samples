
function translate(str) {
	var answer = "";
  	var howLong = str.length;
	
	//I could definitely get rid of this switch and handle the initial vowel in the for loop
  	switch (str[0]) {
  		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
			answer = str + "way";
			console.log(answer);
			break;   
  	  };
  	if (answer != "") {
	  return answer;
  	}
  
  	var letters = str.toLowerCase();
	var position = howLong;
	
	
	var vowels = ["a", "e", "i", "o", "u"];
	for (var i = 0; i < vowels.length; i++) {
		if (letters.indexOf(vowels[i]) < position && letters.indexOf(vowels[i]) != -1) {
			position = letters.indexOf(vowels[i]);
			}
	}
	var chunk = letters.substr(0, position);
	answer = letters.substr(position) + chunk + "ay"
	return answer;
}


translate("california");

