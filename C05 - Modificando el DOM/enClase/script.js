let gatitos =[
    {
        id: 1,
        nombre: 'Mei',
        color: 'Blanco',
        imgUrl: '',
        edad: 2
    },
    {
        id: 2, 
        nombre: 'Chimu',
        color: 'Negra',
        imgUrl: '',
        edad: 1
    },
    {
        id: 3, 
        nombre: 'Gris',
        color: 'Blanco',
        imgUrl: 'img/',
        edad: 5
    }
]
console.log(gatitos)

const contenedor = document.querySelector('main')
console.log(contenedor)


function crearCard(gatitos, contenedor){
    const card =  `<div id="${gatitos.id}" class="card">
        <h2> ${gatitos.nombre} </h2>
        <img src = "${gatitos.imgUrl}">
        <p> ${gatitos.color}</p>
    </div>`
    contenedor.innerHTML += card
}

function selecionar(id){
    let card = document.getElementById(id)
    card.classList.add('active')
}

function cambiarModo(){
    document.querySelector('body').classList.toggle('dark')
}

for(const gatito of gatitos){
    console.log(gatito.color)
    crearCard(gatito, contenedor)
}
