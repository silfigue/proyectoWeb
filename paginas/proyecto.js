//donaciones de visitantes de la página web
/*
function contribucion(destino,monto,nombreYapellido){
        switch(destino) {
            case "FAUNA NATIVA":alert("Gracias " + nombreYapellido + "Usted contribuye con FAUNA NATIVA, por $" + monto)
            break;
            case "FLORA NATIVA":alert("Gracias " + nombreYapellido + "Usted contribuye con FLORA NATIVA, por $" + monto)
            break;
            case "AMBIENTE":alert("Gracias "+ nombreYapellido + "Usted contribuye con AMBIENTE, por $" + monto)
            break;
            default:alert("Destino incorrecto");
            break;
        }
}
let ayuda = prompt ("Tu contribución puede hacer la diferencia. ¿Nos Ayudas?SI/NO")
if(ayuda =="SI" || ayuda =="si"){
  let monto = prompt ("Ingrese el monto de su aporte")
  let nombreYapellido = prompt("ingrese su nombre y apellido")
  let destino = prompt ("Ingrese a dónde destina su aporte: FAUNA NATIVA - FLORA NATIVA - AMBIENTE")
  contribucion(destino,monto,nombreYapellido)
}
  alert("Gracias por su interes")
