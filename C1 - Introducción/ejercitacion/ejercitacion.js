let array = [1, 2, 4, 8] // definimos el array 
let sumatoria = 0  // declaramos el valor inicial de nuestra variable donde vamos a iterar 
function sumar(array){ 
    for(let i = 0; i <array.length; i++){ 
   //sumatoria = sumatoria+=array[i]; // aquí es donde renegamos al poner mas de un = en la misma linea, el primer "=" asigna la operación que vamos a hacer, el "=+" asigna y suma al mismo tiempo, lo mejor es que comentemos esta línea y la reemplazemos por la que sigue
// opción A
   sumatoria = sumatoria + array[i]; // esta es la manera más sencilla para no enredarse 
// opción B
//sumatoria += array[i]; // y esta es una manera resumida de resolverlo, lo que llamamos "refactorizarlo para simplificar código", acordate de que += suma y asigna el valor a la mismo resultado que tenemos asignado en "sumatoria" para cada iteración
         console.log(sumatoria)
    }
}
console.log(sumar(array));