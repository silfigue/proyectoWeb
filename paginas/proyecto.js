//donaciones de visitantes de la página web


function contribucion(valor){
    if (valor == "si"){
        let montoContribución = prompt ("Ingrese el monto de su aporte")
        console.log("el importe a donar es $"+ montoContribución)
        let nombreYApellido = prompt ("ingrese su nombre y apellido")
        console.log("su nombre y apellido es"+  nombreYApellido)
        let destino = prompt ("Ingrese a dónde destina su aporte: FAUNA NATIVA - FLORA NATIVA - AMBIENTE")
        switch(destino) {
            case "FAUNA NATIVA":alert ("ud. contribuye con FAUNA NATIVA, por $" + montoContribución);
            break;
            case "FLORA NATIVA":alert ("ud. contribuye con FLORA NATIVA, por $" + montoContribución);
            break;
            case "AMBIENTE ":alert ("ud. contribuye con AMBIENTE, por $" + montoContribución);
            break;
            default: alert ("Te agradecemos tu interés");
            break;
        }
    
    }else{
        console.log("Gracias igal por tu interes")
    }

}
let contribución = prompt ("Tu contribución puede hacer la diferencia. ¿Nos Ayudas?")
console.log(contribucion(contribución))

//Si ingresa FAUNA NATIVA

//if (destino == "FAUNA NATIVA")
//alert ("ud. contribuye con FAUNA NATIVA, por $" + montoContribución)

//Si ingresa FLORA NATIVA

//if (destino == "FLORA NATIVA")
//alert ("ud. contribuye con FLORA NATIVA, por $" + montoContribución)

// Si ingresa AMBIENTE

//if (destino == "AMBIENTE"){
  //  alert ("ud. contribuye con AMBIENTE, por $" + montoContribución)
//}else {
  //  alert ("Te agradecemos tu interés")
//}