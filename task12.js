"use strict";
let start = Math.floor(prompt("Введите начало диапазона"));
let end = Math.floor(prompt("Введите конец диапазона"));
let sum = 0;
if(Number.isNaN(start) || Number.isNaN(end)){
    alert("Введено не число")
}
else{
    for(let i = start; i <= end; i++){
        if(i%2 !== 0){
            sum += i;
        }
    }
}
alert(sum);