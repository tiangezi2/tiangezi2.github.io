var stage = document.querySelector(".stage");
var bg1= document.querySelector('.mono')
var bg2= document.querySelector('.qian')
var bg3= document.querySelector('.haer')
var rw1= document.querySelector('.mono img')
var rw2= document.querySelector('.qian img')
var rw3= document.querySelector('.haer img')



document.body.onmousemove = function(event) {


	var x = event.clientX - stage.offsetLeft - stage.offsetWidth / 2;
	var y = event.clientY - stage.offsetTop - stage.offsetHeight / 2;
	// console.log(x, y);

	stage.style.transform = "rotateY(" + x / 50 + "deg) rotateX(" + y / 20 + "deg)";
	bg1.style.backgroundPositionX = (x/150)+'px' 
	bg1.style.backgroundPositionY = (y/30)+'px'
	bg2.style.backgroundPositionX = (x/150)+'px'
	bg2.style.backgroundPositionY = (y/30)+'px'
	bg3.style.backgroundPositionX = (x/150)+'px'
	bg3.style.backgroundPositionY = (y/30)+'px'

	rw1.style.top = (y/20)+35+'px'
	rw1.style.left = (-x/20)+'px'

	rw2.style.top = (y/20)+25+'px'
	rw2.style.left = (-x/20)+35+'px'

	rw3.style.top = (y/20)+20+'px'
	rw3.style.left = (-x/20)+'px'



};