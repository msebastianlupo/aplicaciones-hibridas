'use strict'

function sumar(a, b){
    return a + b;
}

function dividir(a, b){
    return a / b;
}

function obtenerMayor(arr){
    return Math.max(...arr);
}

console.log(sumar(5, 10));
console.log(dividir(20, 2)); //si intentás dividir por cero te da infinity
console.log(obtenerMayor([2,8,9,7,5,6]));

