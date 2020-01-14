"use strict";
let cityCode = +prompt("Введите код города: ");
if(Number.isNaN(cityCode)){
    alert("Вы ввели не число");
}
else{
    switch(cityCode){
        case 905:
            alert("Стоимость вашего разговора (Москва) "+10*4.15+" руб.");
            break;
            case 194:
                alert("Стоимость вашего разговора (Ростов) "+10*1.98)+" руб.";
                break;
                case 491:
                    alert("Стоимость вашего разговора (Краснодар) "+10*2.69+" руб.");
                    break;
                    case 800:
                        alert("Стоимость вашего разговора (Киров) "+10*5+" руб.");
                        break;
                        default:
                            alert("Такого кода нет");
    
    
    
    
    }
}
