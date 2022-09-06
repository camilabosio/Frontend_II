/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

//Variables globales 
const formulario = document.querySelector('form');
const inputComentario = document.querySelector('#comentario')
const areaComentarios = document.querySelector('#comentarios')
let listaComentarios = [];


//Función renderizar comentarios
function renderizarComentarios(lista){
    areaComentarios.innerHTML = ''; //Resetear
    lista.forEach(elemento => {
        let parrafo = document.createElement('p');

        parrafo.innerText = elemento;
        areaComentarios.appendChild(parrafo)
    })
    guardarComentarios(listaComentarios);
}

//Guardar comentarios en LS
function guardarComentarios(lista){
    localStorage.setItem('listaComentarios', JSON.stringify(lista));
}

//Leer datos del Storage
function leerComentarios(){
    let datos = localStorage.getItem('listaComentarios');
    
    if(datos){
        listaComentarios = JSON.parse(datos);
        renderizarComentarios(listaComentarios);

    }

}

//Leer eventos del formulario
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    let comentario = inputComentario.value.trim();

    if(comentario != ''){
        console.log("Agregando comentario")
        listaComentarios.push(comentario)
        inputComentario.value = '';
        console.log(listaComentarios);

        renderizarComentarios(listaComentarios)
    }
})

function normalizar(input){
    return input.value.trim()
}

leerComentarios();