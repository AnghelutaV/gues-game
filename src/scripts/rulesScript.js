
function myFunction() { // give it a proper name
	let text = document.querySelector("#iname").value;

	document.querySelector("#demo").innerHTML = text + " - You wrote ";
};

function signerIn() {
	let name = document.querySelector("#iname").value;
	let parola = document.querySelector("#ipassword").value;

	if (name == "Victor" && parola == "0909") {
		document.querySelector("#demo1").innerHTML = "Good to see you " + name;
		return;
	} 

	document.querySelector("#demo1").innerHTML = "Sorry, this Acount doesn't exist!";
};

// this event doesn't work
const alertB = document.querySelector("#AlertB");
//const goButton = document.querySelector("#go-Button");
//resetButton.addEventListener("click", resetButtonClickHandler);

alertB.addEventListener("click", functionAlert);

function functionAlert() {
	alert("hello alert system");
};
 
// this event doesn't work 

var page2 = document.querySelector("#page2");

page2.onclick = function () 
{
	alert("this page is not done yet!");
};

var page3 = document.querySelector("#page3");

page3.onclick = function () {
	alert("this page is not done yet!");
};

function resetButtonClickHandler()
{
	location.reload();
};