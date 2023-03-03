
const goButton = document.querySelector("#goButton");
const resetButton = document.querySelector("#resetButton");
const errorMessageNode = document.querySelector("#long");

goButton.addEventListener("click", goButtonClickHandler);
resetButton.addEventListener("click", resetButtonClickHandler);

let wordIndex = 0;

function goButtonClickHandler() {

	const inputText = document.querySelector("#ph").value;
	const wordLength = inputText.length;

	if (wordLength > 6) {
		errorMessageNode.innerHTML = 'Atenție! Ați introdus un cuvînt prea lung!';
		return;
	}

	if (wordLength < 6) {
		errorMessageNode.innerHTML = 'Atenție! Ați introdus un cuvînt prea scurt!';
		return;
	}

	if (wordIndex >= 6) {
		errorMessageNode.innerHTML = 'Atenție! Tabelul este plin!';
		return;
	}

	const wordRow = document.querySelector(`#tab > tbody > tr:nth-child(${++wordIndex})`);
	const letters = inputText.split('');

	const letterCells = [...wordRow.childNodes.values()]
		.filter((node) => node.nodeName === 'TD' && node.classList.contains('letter'));

	letters.forEach((letter, index) => {
		letterCells[index].innerHTML = letter;
	});
};

function resetButtonClickHandler() {
	location.reload();
};

// activated on page index.html
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
