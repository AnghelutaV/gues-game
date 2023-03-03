
function myFunction() { // give it a proper name
	const text = document.querySelector("#iname").value;

	document.querySelector("#demo").innerHTML = text + " - You wrote ";
};

function signerIn() {
	const name = document.querySelector("#iname").value;
	const parola = document.querySelector("#ipassword").value;

	if (name === "Victor" && parola === "0909") {
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

// activated on page rules.html
const stubPageClickHandler = e => {
	e.preventDefault();
	window.history.replaceState({}, "", "/");
	alert("This page isn't done yet!");
};

const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");

page2.addEventListener("click", stubPageClickHandler);
page3.addEventListener("click", stubPageClickHandler);

function resetButtonClickHandler() {
	location.reload();
};
