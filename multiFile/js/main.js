var main = document.getElementsByClassName("main");
var mainText = document.getElementsByClassName("mainText");
var y = document.getElementsByClassName("y");
var w = document.getElementsByClassName("w");
var c = document.getElementsByClassName("c");
var boxY = document.getElementsByClassName("boxY");
var boxW = document.getElementsByClassName("boxW");
var boxC = document.getElementsByClassName("boxC");
var textY = document.getElementsByClassName("textY");
var textW = document.getElementsByClassName("textW");
var textC = document.getElementsByClassName("textC");

var toggleLamp = function(element){
	
	if(element.className == 'lamp'){
		element.className = 'lamp' + ' isToggle';
		main[0].className = 'main' + ' isToggle';
		mainText[0].className = 'mainText' + ' isToggle';
		y[0].className = 'y' + ' isToggle';
		w[0].className = 'w' + ' isToggle';
		c[0].className = 'c' + ' isToggle';
		boxY[0].className = 'boxY' + ' isToggle';
		boxW[0].className = 'boxW' + ' isToggle';
		boxC[0].className = 'boxC' + ' isToggle';
		textY[0].className = 'textY' + ' isToggle';
		textW[0].className = 'textW' + ' isToggle';
		textC[0].className = 'textC' + ' isToggle';
	}
	else{
		element.className = 'lamp';
		main[0].className = 'main';
		mainText[0].className = 'mainText';
		y[0].className = 'y';
		w[0].className = 'w';
		c[0].className = 'c';
		boxY[0].className = 'boxY';
		boxW[0].className = 'boxW';
		boxC[0].className = 'boxC';
		textY[0].className = 'textY';
		textW[0].className = 'textW';
		textC[0].className = 'textC';
	}


}