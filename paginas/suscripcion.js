
/*function sumatoriaGanacias(importes) {
    let sumatoria = 0;
    for (i = 0; i < importes.length; i++) {
        let mes = importes[i];
        if ( mes <=1000 && mes > 0) {
            sumatoria += mes;
        }
    }
    
    return sumatoria;
}

let importes=[300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]
console.log(sumatoriaGanacias(importes));     

function verificarAsiento(disponibles,asiento){
    for(i = 0; i < disponibles.length; i++){
        if (disponibles(i)== asiento){
            
        }
    }
}*/


function validarEmail(valor) {
    let auxiliar=valor.indexOf("@")
    if (auxiliar==-1)/* no encontro un arroba dentro del string del mail*/
    {
     alert("La dirección de email ingresada es incorrecta. Ingresa una correo valido para poder suscribirte");
    } else { 
     alert("La dirección de email " + valor + " es correcta.");
     alert("Felicitaciones!! Te has suscripto de forma correcta a nuestro boletin de Noticias de Nuestra")
    }
  }

let nombre=prompt("Queres recibir noticias de NUESTRA? Suscríbete a nuestro boletín y recibirás las últimas noticias y mucho más..! Ingresa tu nombre")
let correo=prompt("Hola "+ nombre +" Para suscribirte necesitamos que ingreses tu correo")
validarEmail(correo)