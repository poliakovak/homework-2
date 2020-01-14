"use strict";
let number = 255;
let sum = 0;
while(number > 0){
    let newNumber = number%10;
    if(newNumber%2 !== 0){
        sum += newNumber;
    }
    number = (number - newNumber)/10;
}
alert(sum);