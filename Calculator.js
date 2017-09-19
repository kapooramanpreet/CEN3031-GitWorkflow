function add(){
	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	alert("Result= " + (v1+v2).toString());
}

function subtract(){
	var v1 = parseInt(document.getElementById("input1").value);
	var v2 = parseInt(document.getElementById("input2").value);
	alert("Results= " + (v1-v2).toString());
}

function multiply(){
	var v1=parseInt(document.getElementById("input1").value);
	var v2=parseInt(document.getElementById("input2").value);
	alert("Result= " + (v1*v2).toString());	
}

function divide(){
	var num=parseInt(document.getElementById("input1").value);
	var den=parseInt(document.getElementById("input2").value);
	alert("Result= " + (num/den).toString());
}
