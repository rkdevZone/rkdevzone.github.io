


var list = "q1w2e3r4(!@#$%&*-+";
var result = "";
var textField = document.getElementById('textField');
var button = document.getElementById('button');
var reset = document.getElementById('reset');

function passGen(Length){
	result = "";
	for (var i = 0; i < Length; i++) {
		result += list.charAt(Math.floor(Math.random() * list.length));
	}

	return result;
}


button.addEventListener('click',function(){


	var result = passGen(Number(textField.value));
	textField.value = result;
	textField.setAttribute("readonly",true);

})


reset.addEventListener('click',function(){


	
	textField.value = "";
	textField.removeAttribute("readonly");

})
