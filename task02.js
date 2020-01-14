"use strict";
let min = +prompt("Введите число от 0 до 59");
if(Number.isNaN(min)){
    alert("Вы ввели не число");
}
else if(min < 0 || min > 59){
    alert("Число некорректно");
}
else{
    if(min >= 0 && min < 15){
        alert("Первая четверть");
    }
        else if(min >= 15 && min < 30 ){
            alert("Вторая четверть");
        }
            else if(min >= 30 && min < 45){
             alert("Третья четверть");
            }
                else{
                    alert("Четвертая четверть");
                }
}