function textChange(){
	document.getElementById('h2').innerHTML="Welcome to Dhaka";
}
function tabChange(){
	document.getElementsByClassName('h3')[2].innerHTML="Welcome";
}
function dateChange(){
	document.getElementById('h1').innerHTML= Date();
}
function dataChangeVar(){
	var text = "Welcome to Dhaka | "
	document.getElementById('h3').innerHTML= text.repeat(4);
}
function styleChange(){
	document.getElementById('h4').style.fontSize= "45px";
	document.getElementById('h4').style.color= "purple";
	document.getElementById('h4').style.border= "4px solid purple";
}
function imageOne(){
	document.getElementById('img').src= "images/t1.jpg";	
}
function imageTwo(){
	document.getElementById('img').src= "images/t2.jpg";	
}
function alertMassage(){
	window.alert("Welcome to Dhaka");	
}
function alertText(){
	document.write("Refresh the page to go back");	
	console.log("Refresh the page to go back");	
}
$(document).ready(function(){
	// alert message
	$('#jqbtn').click(function(){
		alert("Warning");
	});
});