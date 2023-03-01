let count = 1;

function goButtonClickHandler() {
	let x = document.querySelector("#ph")?.value;

	if (x.length == 6) {

		for (var i = 0; i < x.length; i++) {

			const id = `#${count + "-" + i}`;
			
			document.querySelector(id).innerHTML = x[i];
		}
		count++;
		return;
	}
	
	if (x.length > 6) {
		document.querySelector("#long").innerHTML = 'Atenție! Ați introdus un cuvînt prea lung!';
		return;
	}
	
	if (x.length < 6) {
		document.querySelector("#long").innerHTML = 'Atenție! Ați introdus un cuvînt prea scurt!';
	}
}

function resetButtonClickHandler() // remove input
{
	location.reload();
};

function myFunction() {
	let text = document.querySelector("#iname").value;

	document.querySelector("#demo").innerHTML = text + " - You wrote ";
};

function signerIn() {
	let name = document.querySelector("#iname").value;
	let parola = document.querySelector("#ipassword").value;

	if (name == "Victor" && parola == "0909") {
		document.querySelector("#demo1").innerHTML = "Good to see you " + name;
	} else {
		document.querySelector("#demo1").innerHTML = "Sorry, this Acount doesn't exist!";
	}

};

//event
let alertB = document.querySelector("#AlertB");

alertB.addEventListener(click, function1);

function function1() {
	alert("hello alert system");
}

if (alertB) {
	// Not called
	alertB.addEventListener('click', () => {
		alert('You clicked the button');
	});
}



var page2 = document.querySelector("#page2");

page2.onclick = function () {
	alert("this page is not done yet!");
};

var page3 = document.querySelector("#page3");

page3.onclick = function () {
	alert("this page is not done yet!");
};

var page22 = document.querySelector("#page22");

page22.onclick = function () {
	alert("this page is not done yet!");
};

var page33 = document.querySelector("#page33");

page33.onclick = function () {
	alert("this page is not done yet!");
};
