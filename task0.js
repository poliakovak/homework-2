"use strict";
let numberOfDay = +prompt("Введите порядковый номер дня недели");
if(Number.isNaN(numberOfDay)){
    alert("Вы ввели не число");
}
else{
    switch(numberOfDay){
        case 1:
            alert("11.00 Встреча з заказчиком");
            break;
            case 2:
                alert("12.30 Стоматолог");
                break;
                case 3:
                    alert("14.10 Занятие в автошколе");
                    break;
                    case 4:
                        alert("10.00 Собеседование");
                        break;
                        case 5:
                            alert("17.10 Забрать друга из аеропорта");
                            break;
                            case 6:
                                alert("16.30 Сеанс в кино");
                                break
                                case 7:
                                    alert("День свободен");
                                    break;
                                    default:
                                        alert("Такого дня недели нет");
    
    }
}

