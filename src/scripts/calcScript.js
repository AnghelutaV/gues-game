let selectParameter = document.querySelector("#parameters");
//document.querySelector("#result").innerHTML=selectParameter;

selectParameter.addEventListener("click", calculateParameters);

function calculateParameters(){
    let selectP = document.querySelector("#parameters").value;
    if (selectP ==="Compresion") {
        
        document.querySelector("#inputSpaceC").style.display = "block";

        let inputParameterF = document.querySelector("#inputParameterForce").placeholder = "Force in N";
        let inputParameterA = document.querySelector("#inputParameterArea").placeholder = "Area in mm2";

        const calculate = document.querySelector("#calculateBtn");
        calculate.addEventListener("click", calculateCompresion);

        function calculateCompresion(){
        let inputParameterF = document.querySelector("#inputParameterForce").value;
        let inputParameterA = document.querySelector("#inputParameterArea").value;

        document.querySelector("#result").innerHTML =  
        "<p>"+ inputParameterF / inputParameterA + " MPa" + "</p>";
        }
       
    }

    if (selectP ==="Water content") {

        document.querySelector("#inputSpaceW").style.display = "block";

        let inputParameterF = document.querySelector("#inputParameterForce").placeholder = "wet mass";
        let inputParameterA = document.querySelector("#inputParameterArea").placeholder = "dry mass";
        const calculate = document.querySelector("#calculateBtn");
        calculate.addEventListener("click", calculateWater);
        
        function calculateWater(){
            let inputParameterF = document.querySelector("#inputParameterForce").value;
            let inputParameterA = document.querySelector("#inputParameterArea").value;
    
            document.querySelector("#result").innerHTML =  
            "<p>"+ inputParameterF * inputParameterA + " MPa" + "</p>";
        }
    }
}