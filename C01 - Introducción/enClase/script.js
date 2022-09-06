let nombre = "Camila"
let dni = 425556845;
let estudiante = true;
let cursosActuales = ['Front II', "Infraestructura I"];
let gatos = {
    nombre: "Chimuela",
    edad: "Siete meses",
    esHermosa: true
}



console.log("Hola " + nombre + " estás leyendome desde la consola");

console.table(gatos);

if(gatos.nombre == "Chimuela"){
    console.log("Chimu es la mejor peor gata del mundo");
}

for (let i = 0; i< cursosActuales.length; i++) {
console.log(cursosActuales[i]);   
}

