function validarDatos(nombre, correo) {
  if(nombre =="" || correo==""){
    alert("Por favor ingrese sus datos")  
    }else{
        let auxiliar=correo.indexOf("@")
        if (auxiliar !=-1 )/* no encontro un arroba dentro del string del mail*/
        {alert(`FELICITACIONES ${nombre} te has suscripto de forma correcta a nuestro boletin de Noticias de Nuestra`)
        
        } else { 
         alert("La dirección de email ingresada es incorrecta. Ingresa una correo valido para poder suscribirte");
        } 
    }
}
alert("Queres recibir noticias de NUESTRA? Suscríbete a nuestro boletín y recibirás las últimas noticias y mucho más..!")
let nombre=prompt( "Por favor ingresa tu nombre")
let correo=prompt("Hola "+ nombre +" ya casi terminamos... para terminar la suscripcion necesitamos que ingreses tu correo")
validarDatos(nombre, correo)