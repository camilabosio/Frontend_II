const gatitos = [
    {
        id: 1,
        name: 'Chimu',
        imgUrl: 'img/chimu.png',
        like: false
    },
    {
        id: 2,
        name: 'Mei',
        imgUrl: 'img/chimu.png',
        like: true
    },
    {
        id: 3,
        name: 'Gris',
        imgUrl: 'img/gris.jpg',
        like: false
    },
];

const galeria = document.querySelector('.container');
const loading = document.createElement('img');
loading.setAttribute('src','img/loading.gif');  
galeria.appendChild(loading);

//Creación de cards
function crearCard(gatito){
    const card = ` <div class="card">
                    <div onclick="favorito(${gatito.id})" class="row">
                        <h3 class="card-name">${gatito.name}</h3>
                        
                        <i class="fa-solid fa-lg fa-heart ${ gatito.like ? 'like' : '' }"></i>
                    </div>
                    <img src="${gatito.imgUrl}" class="imagen" alt="imagen de ${gatito.name}" id="${gatito.id}" />
                </div>`;
    galeria.innerHTML += card;
}

//Darle like a las imagenes
//Le paso el id del array
function favorito(id){
    console.log('❤');

//Recorro el array
    gatitos.forEach(gatito => {
        if( gatito.id == id  ){
            //Agrego o saco el like
            gatito.like = !gatito.like;
        }
    }); 
    
    // Refresco la galaria
    renderizarCards();
}

//Carga todas las cards
function renderizarCards(){
    galeria.innerHTML = '';

    //Recorro el array de gatitos
    gatitos.forEach(gatito => {
        //Llamo a la función para renderizar las cards
        crearCard(gatito);
    });

    console.log('Renderizando')
}

//Recibe las cards y las visualiza luego del tiempo indicado
setTimeout(renderizarCards, 2000);