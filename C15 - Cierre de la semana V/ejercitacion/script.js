/* --------------------------- Variables globales --------------------------- */
const formulario = document.querySelector('form');
const inputComentario = document.querySelector('#comentario');
const areaComentarios = document.querySelector('#comentarios');


let listaComentarios = [];


/* --------------------------- boton borrar  --------------------------- */


const borrarComentarios = document.createElement("button");
borrarComentarios.innerText = 'Borrar Comentarios';
borrarComentarios.setAttribute("type", "reset");
formulario.appendChild(borrarComentarios);



if (localStorage.getItem("areaComentarios")){
    listaComentarios = JSON.parse(localStorage.getItem("areaComentarios"));

};

/* ---------------------------  borrar  datos  --------------------------- */

formulario.addEventListener("reset", function (evento){
   evento.preventDefault;

   areaComentarios.innerHTML ="";
    listaComentarios = [];

    localStorage.clear();

});

/* ------------------------- Renderizar Comentarios ------------------------- */
function renderizarComentarios(lista){
    areaComentarios.innerHTML = '';  // Resetear 
    lista.forEach(elemento => {
        let parrafo = document.createElement('p');
        let fechaActual = new Date(); // Obtener fecha
        parrafo.textContent = `${elemento} -  ${fechaActual.toUTCString()}`; 
        areaComentarios.appendChild(parrafo);

    
    });

    guardarComentarios(listaComentarios);
}    
  

/* --------------------------- Guardar Datos en el Storage -------------------------- */
function guardarComentarios(lista){
    localStorage.setItem('listaComentarios', JSON.stringify(lista));
}

/* ------------------------- Leer Datos del Storage ------------------------- */
function leerComentarios(){
    let datos = localStorage.getItem('listaComentarios');

    if( datos ){
        listaComentarios = JSON.parse(datos);
        renderizarComentarios(listaComentarios);
    }

}


/* ---------------------- Leer el evento del Formulario --------------------- */
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    let comentario = inputComentario.value.trim();

    if( comentario != ''  ){
        console.log('Agregando comentario');
        listaComentarios.push(comentario);
        inputComentario.value = '';
        console.log(listaComentarios);

        renderizarComentarios(listaComentarios);
    }


})


function normalizar(input){
    return input.value.trim();
}


leerComentarios();
