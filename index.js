function calculate(number){
    let result = document.getElementById('result');
     result.value += number;
     }
    

function evaluateResult() {
    let result = document.getElementById('result');
    result.value = eval(result.value)
    
}

function clearScreen(){
    result.value = "";
}