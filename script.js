let firstnum =0;
let secondnum=0;

function multipy(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    if (num2 === "0"){
        alert("cannot divide by zero");
        return null;
    }
    return num1/num2;
}
function subtact(num1,num2){
    return num1-num2;
}
function sum(num1,num2){
    return num1-num2;
}
function operator(operator , num1,num2){
    switch (operator){
        case "+":
            multipy(num1,num2);
            break;
        case "-":
            subtact(num1,num2);
            break;
        case "*":
            multipy(num1,num2);
        default:
            divide(num1,num2);
    }
}
let display=document.getElementById("calculator-display");
function clear(){
    display.innerHTML="";
}
document.getElementById("AC").addEventListener("click",clear);
// operator buttons behaviour
document.getElementById("add").addEventListener("click",()=>{
    firstnum += parseInt(display.innerHTML);
    secondnum =0;
    clear();
})


//added number buttons
let digit_0 = document.getElementById("0");
digit_0.addEventListener("click",()=>{
    display.innerHTML += "0";
})

let digit_1 = document.getElementById("1");
digit_1.addEventListener("click",()=>{
    display.innerHTML += "1";
})

let digit_2 = document.getElementById("2");
digit_2.addEventListener("click",()=>{
    display.innerHTML += "2";
})

let digit_3 = document.getElementById("3");
digit_3.addEventListener("click",()=>{
    display.innerHTML += "3";
})

let digit_4 = document.getElementById("4");
digit_4.addEventListener("click",()=>{
    display.innerHTML += "4";
})

let digit_5 = document.getElementById("5");
digit_5.addEventListener("click",()=>{
    display.innerHTML += "5";
})

let digit_6 = document.getElementById("6");
digit_6.addEventListener("click",()=>{
    display.innerHTML += "6";
})

let digit_7 = document.getElementById("7");
digit_7.addEventListener("click",()=>{
    display.innerHTML += "7";
})

let digit_8 = document.getElementById("8");
digit_8.addEventListener("click",()=>{
    display.innerHTML += "8";
})

let digit_9 = document.getElementById("9");
digit_9.addEventListener("click",()=>{
    display.innerHTML += "9";
})