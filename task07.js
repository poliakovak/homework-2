"use strict";
let alarm;
while(alarm !== '0'){
    let X = +prompt("Введите первый опреранд");
    let Y = +prompt("Введите второй опреранд");
    let Z;
    let operation = prompt("Введите операцию (+,-,/,*)");
    if(Number.isNaN(X) || Number.isNaN(Y)){
        alert("Это не число");
        continue;
    }
    else if(operation === "/" && Y === 0){
        alert("Делить на ноль нельзя");
        continue;
    }
    else{
        switch(operation){
            case "+":
                Z = X+Y;
                alert(Z);
                break;
                case "-":
                    Z = X-Y;
                    alert(Z);
                    break;
                    case "/":
                        Z = X/Y;
                        alert(Z);
                        break;
                        case "*":
                            Z = X*Y;
                            alert(Z);
                            break;
                            default:
                                alert("Такой операции нет");
        }
    }   
    alarm = prompt("Введите 0, если хотите выйти");
}