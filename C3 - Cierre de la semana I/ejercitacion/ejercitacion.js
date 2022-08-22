const premioTotal=2500;
const casillas=10;
let premioOtorgado=0;


function calcular(pAciertos){
    premioOtorgado=(2500*pAciertos)/10;
    return premioOtorgado;
}

function tragamonedas(){
    alert('Presiona el botón para calcular tus aciertos (de 1 a 10)');
    let aciertos=parseInt(Math.random()*(10-1)+1);
    console.log("aciertos: "+aciertos);
    alert('El número de aciertos es: '+aciertos);
    alert('El premio otorgado es: '+calcular(aciertos));
}


let objetoJuego = prompt('Ingresa el objeto o lugar con el que soñaste ayer: ');
let aleatorio=parseInt(Math.random()*(3-0)+0);

function resultadoLoteria(aleatio)
{
    if(aleatorio==0)
    {
        premio=1000;
    } else if(aleatorio==1 || aleatorio==2){
        premio=10000;
    }else if(aleatorio==3){
        premio=100000;
    }
    return premio;
}