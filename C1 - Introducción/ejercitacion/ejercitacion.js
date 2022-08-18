let array = [1, 2, 4, 8]

function sumar(array){
    let sumatoria = 0;

    for(let i = 0; i<array.length; i++){
        console.log(`La suma de ${array[i]} + ${array[i+1]} es: ${sumatoria += array[i]}`)
    }
}
sumar(array);