/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Hola! ¿Cómo te llamas?");

  let cuentaEdad = parseInt(prompt("¿En qué año naciste?"))
  datosPersona.edad = 2022 - cuentaEdad 

  datosPersona.ciudad = prompt("¿En dónde vivís?")

  datosPersona.interesPorJs = confirm("Te interesa JavaScript?") ? "Si, me interesa" : "No por ahora";

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerText = datosPersona.nombre;
  document.getElementById("edad").innerText = datosPersona.edad;
  document.getElementById("ciudad").innerText = datosPersona.ciudad;
  document.getElementById("javascript").innerText = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const contenedor = document.getElementById("fila")
  for (let i = 0; i < listado.length; i ++){
    let card = ` <div class = 'caja'>
        <img src=${listado[i].imgUrl} alt = ${listado[i].lenguajes}>
        <p class="lenguajes">${listado[i].lenguajes} </p>
        <p class="bimestre">${listado[i].bimestre} </p>
      </div>
      `
    contenedor.innerHTML += card;
  }
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas)
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 document.querySelector('#sitio').classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", (Event) => {
  if(Event.key == "F"){
    document.getElementById("sobre-mi").classList.remove("oculto");
  }
})

