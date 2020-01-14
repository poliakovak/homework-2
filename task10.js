"use strict";
let number = Math.floor(prompt("Введите целое положительное число"));
let sum = 0;
if(number <= 0){
    alert("Это не положительное число");
}
else if(Number.isNaN(number)){
    alert("Это не число");
}
else{
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    alert(sum);
}
