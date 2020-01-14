"use strict";
let nFib = 12;
let fib1 = 1;
let fib2 = 1;
let newFib;
 for (let i = 3; i <= nFib; i++) {
    newFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = newFib;
 }        
 alert(Math.round(newFib));