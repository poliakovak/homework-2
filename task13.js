"use strict";
let number = Math.floor(prompt("Введите число"));
let factorial = 1;
if(Number.isNaN(number)){
    alert("Введено не число");
}
else{
    for(let i = 1; i <= number; i++){
        factorial *= i;
    }
}  
alert(factorial);  