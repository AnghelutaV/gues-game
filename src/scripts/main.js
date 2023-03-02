
let goButton = document.querySelector("#goButton");
let resetButton = document.querySelector("#resetButton");

goButton.addEventListener("click", goButtonClickHandler);
resetButton.addEventListener("click", resetButtonClickHandler);


function goButtonClickHandler() {
	let count = 1;
	let x = document.querySelector("#ph").value;
	
	if (x.length == 6) {

		for (var i = 0; i < x.length; i++) {

				var idWord= '#count+"-"+i';
			document.querySelector(idWord).innerHTML = x[i];
		}
		
		count++;
		
	}else if (x.length > 6) 
	{
		document.querySelector("#long").innerHTML = 'Atenție! Ați introdus un cuvînt prea lung!';
		
	}else (x.length < 6) 
	{
		document.querySelector("#long").innerHTML = 'Atenție! Ați introdus un cuvînt prea scurt!';
	};
};

function resetButtonClickHandler()
{
	location.reload();
};