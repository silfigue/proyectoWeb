// function validarDatos(nombre, correo) {
//   if(nombre =="" || correo==""){
//     alert("Por favor ingrese sus datos")  
//     }else{
//         let auxiliar=correo.indexOf("@")
//         if (auxiliar !=-1 )/* no encontro un arroba dentro del string del mail*/
//         {alert(`FELICITACIONES ${nombre} te has suscripto de forma correcta a nuestro boletin de Noticias de Nuestra`)
        
//         } else { 
//          alert("La dirección de email ingresada es incorrecta. Ingresa una correo valido para poder suscribirte");
//         } 
//     }
// }
// alert("Queres recibir noticias de NUESTRA? Suscríbete a nuestro boletín y recibirás las últimas noticias y mucho más..!")
// let nombre=prompt( "Por favor ingresa tu nombre")
// let correo=prompt("Hola "+ nombre +" ya casi terminamos... para terminar la suscripcion necesitamos que ingreses tu correo")
// validarDatos(nombre, correo)

//funcion que valida el campo email de una suscripcion
window.onload = () => { //que cargue toda la pagina;
	//let formulario = document.querySelector("form");
    let emailField = document.getElementById('user-email');
  	let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; //expresion regular
    let tex=document.getElementById('mensaje')
	emailField.addEventListener("keyup", () => {
		let tex=document.getElementById('mensaje')
 	if( validEmail.test(emailField.value) ){
		//console.log("Email valido puede suscribirse")
		 tex.innerText='Email valido, puede suscribirse';
         tex.style.color="#4978ff";
		 	
	}else {
		console.log("introduzca un mail valido")
        tex.innerText='Por favor introduzca un email valido para poder suscribirse';
        tex.style.color="#ff0000";
 		
  	}
})

 //guarda el mail en el localStorage cada vez que se suscriben. 
 //Si el mail ingresado por el usuario ya existe en el Storage, no lo suscribe y le avisa al usuario que utilice otro correo distinto

	let inputBoton = document.getElementById("boton");
	localStorage.setItem("mailRegistrado", "sil@gmail.com");
	let mensajeFinal=document.getElementById('mensajeSuscripcion');
	inputBoton.onclick = (event)=>{
	  event.preventDefault()
	  let inputEmail = document.getElementById("user-email").value;
	  if(inputEmail == localStorage.getItem("mailRegistrado")){ //ya existe ese ese mail de suscripcion
		console.log("el mail ya existe, no se pudo suscribir")
		mensajeFinal.innerText = 'No se pudo realizar la suscripcion, ya existe una suscripcion con el mail: '+inputEmail
	  }else{
		mensajeFinal.innerText = 'Suscripcion exitosa'
		localStorage.setItem("mailRegistrado", inputEmail)
		//console.log(localStorage);
	  }
	}
  }
 
 