const button = document.getElementById("calculate")
const result = document.getElementById("result")

let input1 = document.getElementById("number1")
let input2 = document.getElementById("number2")

let num1;
let num2;
let answer; 

input1.addEventListener("input",onChange1)
input2.addEventListener("input",onChange2)
button.addEventListener("click",calculate)

function onChange1(event){ 
    num1 = parseFloat(event.target.value)
}

function onChange2(event){ 
    num2 = parseFloat(event.target.value)
}

function calculate(){
    let math = document.getElementById("math").value;
    // to get if its + or - or etc
    switch (math) {
        case "+" :
            answer = num1 + num2;
            break;
        case "-": 
            answer = num1 - num2;
            break;
        case "*":
            answer = num1*num2;
            break;
        case "/":
            answer = num1/num2;
            break;
        default:
            answer = "Invalid"
            break; 
    }
    result.innerHTML=answer
}
