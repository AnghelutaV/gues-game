let selectParameter = document.querySelector("#parameters");
selectParameter.addEventListener("click", calculateParameters);

function calculateParameters(){
   let  selectItem = document.querySelector("#parameters").value;
   
    switch (selectItem) {
    case "Compresion":
        hideAllInputs();
        document.querySelector("#inputSpaceC").style.display = "block";       
        break;
    case "Water content":
        hideAllInputs();
        document.querySelector("#inputSpaceW").style.display = "block"; 
        break;
     case "Revenirea Elastica":
        hideAllInputs();
        document.querySelector("#inputSpaceRE").style.display = "block";
        break;
     case "Bitumen content":
        hideAllInputs();
        document.querySelector("#inputSpaceBC").style.display = "block";
        break;    
    default:
        break;
    }
}
//function for hiding all imputs, for displaying just one of them
function hideAllInputs() {
  document.querySelectorAll(".inp").forEach(function(el){
  el.style.display = "none";});
}

function resistance() {
    let forceA = document.querySelector("#inputParameterForce").value;
    let base = document.querySelector("#inputParameterArea").value;
    let res = forceA / base;
    document.querySelector("#result1").innerHTML = res + " MPa";
}
function water() {
    let wetMass = document.querySelector("#inputParameterWet").value;
    let dryMass = document.querySelector("#inputParameterDry").value;
    let res = ((wetMass - dryMass) / wetMass) * 100;
    document.querySelector("#result2").innerHTML = res + " %";
}
function recover() {
    let totalLenght = document.querySelector("#inputParameterL").value;
    let recoverLenght = document.querySelector("#inputParameterR").value;
    let res = ((totalLenght - recoverLenght) / totalLenght) * 100;
    document.querySelector("#result3").innerHTML = res + " %";
}
function bitum() {
    let initialMass = document.querySelector("#inputParameterM1").value;
    let finalMass = document.querySelector("#inputParameterM2").value;
    let res = ((initialMass - finalMass) / initialMass) * 100;
    document.querySelector("#result4").innerHTML = res + " %";
}
