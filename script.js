var css = document.querySelector("h3");
var currentBg = document.querySelector("p");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");

// var button = document.querySelector(".button");
// tag in vid: body = bodyBg
var bodyBg = document.getElementById("gradient");
var bodyBg1 = document.getElementById("gradient");

var randomBtn = document.getElementById("random");

function setGradient(){
	// console.log(colour1.value);
	bodyBg.style.background = "linear-gradient(to right, " 
	+ colour1.value 
	+ ", " 
	+ colour2.value 
	+ ")";

	// to write it out to the empty h3 tag. text content is to add to html. 
	css.textContent = bodyBg.style.background + ";" ;
}

function currentGradient(){
	// bodyBg.style.background;
	currentBg.textContent = bodyBg.style.background = "linear-gradient(to right, " 
	+ colour1.value 
	+ ", " 
	+ colour2.value 
	+ ")";
}

function setValue() {
	colour1.style.background = colour1.value;
	colour2.style.background = colour2.value;
}

// no need to call the setGraduient function, because it runs through the when eventListener is activated when the inout is changed. This then sets each colour to the new colours manually input

function randomFun(){
	colour1.value = "#" + Math.floor((Math.random() *100000) + 100000);
	// colour2.value = "#" + Math.floor((Math.random() * 100000) * 3);
	colour2.value = "#" + Math.random().toString(16).slice(2, 8);
	// from My solution (random generate and auto random generate ) by Victor · Lecture 100 (https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/t/lecture/8691588?start=0)
	/* 
	colour2.value = 
	"linear-gradient(to right, " 
	+ "rgb(" 
	+ Math.floor(Math.random() * 256) + ", " 
	+ Math.floor(Math.random() * 256) + ", " 
	+ Math.floor(Math.random() * 256) + ")";
	 ERROR: script.js:44 The specified value "linear-gradient(to right, rgb(133, 198, 228)" does not conform to the required format.  The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.*/

	setGradient();
	console.log(colour1.value, colour2.value);
	/* value not actually a hex number just a number with '#'' added in front. 
	Don't fully understand the math floor logic; think it is: floor(random number multiplied by 100000 but no bigger than 100000) and no smaller than 100000
	and floor(random number multiplied by 100000 but no bigger than 100000) and then multiplied by 3. respectfully.
	*/

}




randomBtn.addEventListener("click", randomFun);

// colour1.addEventListener("input", setGradient);
colour2.addEventListener("input", setGradient);

window.addEventListener("load", currentGradient, setValue);
// this is the correct way to do things by JS, but can be done another way see html file #1