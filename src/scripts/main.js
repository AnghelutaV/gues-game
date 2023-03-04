const goButton = document.querySelector("#goButton");
const resetButton = document.querySelector("#resetButton");
const errorMessageNode = document.querySelector("#long");
const textInputNode = document.querySelector("#ph");

goButton.addEventListener("click", goButtonClickHandler);
resetButton.addEventListener("click", resetButtonClickHandler);

let wordIndex = 0;

function validateInput(inputText) {
	const wordLength = inputText.length;

	if (wordLength > 6) {
		errorMessageNode.innerHTML = 'Atenție! Ați introdus un cuvînt prea lung!';
		return false;
	}

	if (wordLength < 6) {
		errorMessageNode.innerHTML = 'Atenție! Ați introdus un cuvînt prea scurt!';
		return false;
	}

	if (wordIndex >= 6) {
		errorMessageNode.innerHTML = 'Atenție! Ați introdus deja 6 cuvinte!';
		return false;
	}

	return true;
}

function goButtonClickHandler() {

	const enteredText = textInputNode.value;
	const isInputValid = validateInput(enteredText);

	if (!isInputValid) {
		return;
	}

	const wordRow = document.querySelector(`#tab .word:nth-child(${++wordIndex})`);
	const letterCells = wordRow.querySelectorAll(".letter");

	const letters = enteredText.split('');

	letters.forEach((letter, index) => {
		letterCells[index].innerHTML = letter;
	});
};

function resetButtonClickHandler() {
	location.reload();
};

// activated on page index.html
/*
const stubPageClickHandler = e => {
	e.preventDefault();
	window.history.replaceState({}, "", "/");
	alert("This page isn't done yet!");
};

const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");


page2.addEventListener("click", stubPageClickHandler);
page3.addEventListener("click", stubPageClickHandler);
*/

