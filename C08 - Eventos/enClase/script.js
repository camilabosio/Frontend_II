// Loading
window.addEventListener('load', function(){
    iniciar();
})

//Array con elementos de gatito
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

function seleccionar(id){
    console.log('Se selecciono a...'); 
    let card = document.getElementById(id)
    card.classList.add('active');
}

function cambiarModo(){
    //Cuando hacemos click en el header cambia el modo.
    document.querySelector('body').classList.toggle('dark');
}

function crearCard(gatito, contenedor){
    let card = document.createElement('div');
    let titulo = document.createElement('h2');
    let imagen = document.createElement('img');
    let texto = document.createElement('p');

    titulo.innerText = gatito.nombre;
    imagen.setAttribute('src', gatito.imgUrl);
    card.setAttribute('class', 'card');

    // Solucion uno Con setAttribute 
    //card.setAttribute('onClick', 'cambiarModo();');
    
    texto.innerText = gatito.color;    
 
    card.append( titulo, imagen, texto );

    // Solucion dos con addEventListener
    /*
    card.addEventListener('click', function(){
        this.classList.add('active')
    })
    */
    //card.addEventListener('click', seleccionar(this))
    contenedor.appendChild(card) ;
}

// Esto sucede cuando el evendo cargar termina
function iniciar(){
  
    let titulo = document.createElement('h1');
    titulo.innerText = 'Clase 08 - Web Reactiva';
    document.querySelector('header').appendChild( titulo );

    const contenedor = document.querySelector('main');
    
    cambiarModo();
    
    for (const gatito of gatitos) {
        crearCard( gatito, contenedor )
    }

    //Selecciono los elementos a observar
    let cards = document.querySelectorAll('.card');

    //Se necesita un for para recorrer las card y ahí observar y efectuar el evento
    for (let i = 0; i < cards.length; i++) {
        //Obersavor del evento
        cards[i].onclick = function(){
            //Hacemos referencia al evento que hacemos click y le agregamos la clase active. 
            this.classList.add('active')
        }
    }
}


