let numberValue;
let operatorValue;
let operatorCounter = 0;


const displayArea = document.querySelector("#visor");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");

function add (a, b){
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a,b){
    return Math.round(a / b * 100) / 100;
}

function operator(operator, a, b){
    if (operator == "+"){
       return add(a, b);
    } else if (operator == "-"){
       return subtract(a, b);
    } else if (operator == "*"){
       return multiply(a, b);
    } else if (operator == "/"){
        return divide(a, b);
    } 
    console.log("Unsupported parameter");
}

numberButtons.forEach((x) => x.addEventListener('click', () =>{
    displayArea.textContent += x.value;
    return x.value;
 }))

 operatorButtons.forEach((x) => x.addEventListener('click', () =>{
  if(operatorCounter == 0){  
    if (x.value == 10){
            displayArea.textContent += " " + "+" + " ";
            operatorValue = "+";
        } else if (x.value == 11){
            displayArea.textContent += " " + "-" + " ";
            operatorValue = "-";
        } else if (x.value == 12){
            displayArea.textContent += " " + "*" + " ";
            operatorValue = "*";
        } else if (x.value == 13){
            displayArea.textContent += " " + "/" + " ";
            operatorValue = "/";
        }   
    operatorCounter++;
    return x.value;
    }
 }))

 clearButton.addEventListener('click', () => {
        displayArea.textContent = "";
 });

 equalButton.addEventListener('click', () =>{
        let FirstNumber = Number(displayArea.textContent.slice(0,displayArea.textContent.indexOf(" ")));
        let SecondNumber = Number(displayArea.textContent.slice(displayArea.textContent.indexOf(" ") + 2));
      
        if (operatorValue == "+"){
            displayArea.textContent = add(FirstNumber, SecondNumber);
        } else if (operatorValue == "-"){
            displayArea.textContent = subtract(FirstNumber, SecondNumber);
        } else if (operatorValue == "*"){
            displayArea.textContent = multiply(FirstNumber, SecondNumber);
        } else if (operatorValue == "/"){
            if(SecondNumber == 0){
                displayArea.textContent = "ERROR";
            }
            displayArea.textContent = divide(FirstNumber, SecondNumber);
        } else {
            displayArea.textContent = "ERROR";
        }
        
        if (operatorCounter == 1){
            operatorCounter--; 
        }
 });


