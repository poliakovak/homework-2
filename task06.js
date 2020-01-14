"use strict";
let number = Math.floor(prompt("Введите натуральное число"));
let sum = 0;
if(Number.isNaN(number)){
    alert("Вы ввели не число");
}
else{
    while(number > 0){
        let newNumber = number%10;
        if(newNumber%2 == 0){
            sum += newNumber;
        }
        number = (number - newNumber)/10;
    }
}
alert(sum);