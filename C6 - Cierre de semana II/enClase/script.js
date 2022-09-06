let gatitos = [
    {
        id: 1,
        nombre: 'Mei',
        color: 'Blanco',
        imgUrl: 'img/chimu.png',
        edad: 2
    },
    {
        id: 2,
        nombre: 'Chimu',
        color: 'Negra',
        imgUrl: 'img/chimu.png',
        edad: 10
    },
    {
        id:3,
        nombre: 'Gris',
        color: 'Gris',
        imgUrl: 'img/gris.jpg',
        edad: 1
    }
]

const contenedor = document.querySelector('main');
console.log(contenedor);



// Quitar la clase active a todas las card
// Agregar la clase active a la card por id
function seleccionar(id){
   // let activos = document.querySelectorAll('.active');
    //console.log( activos);
    //activos.classList.remove('active');

    let card = document.getElementById(id)
    card.classList.add('active');
}

function cambiarModo(){
    document.querySelector('body').classList.toggle('dark');
}

cambiarModo();

//Crear card de forma mejorada
function crearCard(gatito, contenedor){
    let card = document.createElement('div');
    let titulo = document.createElement('h2');
    let imagen = document.createElement('img');
    let texto = document.createElement('p');

    //Agregar contenido al nodo
    titulo.innerText = gatito.nombre;
    texto.innerText = gatito.color;    

    //Agregar atributo desde JS
    imagen.setAttribute('src', gatito.imgUrl);
    card.setAttribute('class', 'card');
 
    //Agregar los elementos hijos a la card
    // el metodo append agrega uno o varios nodos
    // el método appendChild solo soporta un parámetro
    card.append( titulo, imagen, texto );
 
    //Agregar la card al documento
    contenedor.appendChild(card) ;
}

for (const gatito of gatitos) {
    crearCard( gatito, contenedor )
}