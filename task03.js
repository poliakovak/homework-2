"use strict";
let num = +prompt("Введите порядковый номер сезона");
let result;
if(Number.isNaN(num)){
    alert("Вы ввели не число");
}
switch(num){
    case 1:
         result = "зима";
         break;
         case 2:
             result = "весна";
             break;
             case 3:
                 result = "лето";
                 break;
                 case 4:
                     result = "осень";
                     break;
                     default:
                         alert("Такого сезона нет");
                         result = 0;
        
}