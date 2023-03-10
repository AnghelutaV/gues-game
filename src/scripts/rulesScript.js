
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

function resetButtonClickHandler() {
	location.reload();
};
