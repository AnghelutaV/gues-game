let x;
let count=1;
function clickButton1()
{
	 x  = document.getElementById("ph").value;
	if (x.length == 6)
	{ 
		for ( var i = 0; i<= x.length-1; i++) 
		{
		document.getElementById(count+"-"+i).innerHTML = x[i];
		}
		count++;
	}
	else if (x.length > 6)
	{
		document.getElementById("long").innerHTML ='Atenție! Ați introdus un cuvînt prea lung!';
	}
	else if (x.length < 6)
	{
		document.getElementById("long").innerHTML ='Atenție! Ați introdus un cuvînt prea scurt!';
	}	
	
	
}
	function clickButton2() //- delete the imput
	{
		location.reload();
	};

  function myFunction() {
  let text = document.getElementById("iname").value;

  document.getElementById("demo").innerHTML = text+" - You wrote ";
  };

    function signerIn()
   {
   	let name = document.getElementById("iname").value;
   	let parola = document.getElementById("ipassword").value;

   	if (name == "Victor" && parola=="0909") 
   	{
	document.getElementById("demo1").innerHTML="Good to see you "+ name;
   	}else
   	{
   		document.getElementById("demo1").innerHTML="Sorry, this Acount doesn't exist!";	
   	}
    
   };
   
//event
   	let alertB = document.querySelector("AlertB");

   	alertB.addEventListener(click, function1);

  function function1()
   {
   	alert("hello alert system");
   }
   	
   if (alertB) {
	// Not called
	alertB.addEventListener('click', () => {
	  alert('You clicked the button');
	});
  }



   var page2 = document.getElementById("page2");

    page2.onclick= function(){
   	alert("this page is not done yet!");
   };
   var page3 = document.getElementById("page3");

    page3.onclick= function(){
   	alert("this page is not done yet!");
   };
   var page22 = document.getElementById("page22");

   page22.onclick= function(){
	  alert("this page is not done yet!");
  };
  var page33 = document.getElementById("page33");

   page33.onclick= function(){
	  alert("this page is not done yet!");
  };