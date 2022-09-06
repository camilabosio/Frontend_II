//Elejir una peli random

let peliculas = ['Iron man', 'Capitan America', 'Hulk'];
//Podemos mostrar el valor de un array accediendo a su posición
peliculas[2]

let max = peliculas.length;
let min = 0;

function generarRandom(min, max){
    let numero = Math.floor(Math.random() * (max - min) + min);
    return numero;
} 
let posRandom = generarRandom(min, max)

console.log(posRandom);
console.log( peliculas[posRandom]);









