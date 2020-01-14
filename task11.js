"use strict";
let i = 0;
while(i < 3){
    let answer = prompt("Введите ответ");
    if(answer === "Троллейбус"){
        console.log("Правильно!");
        break;
    }
    else if(answer === "Сдаюсь"){
        console.log("Правильный ответ: троллейбус");
        break;
    }
    else{
        console.log("Подумай ещё");
    }
    i++;
}