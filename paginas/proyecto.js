//donaciones de visitantes de la página web

let contribución = prompt ("Tu contribución puede hacer la diferencia. ¿Nos Ayudas?")
if (contribución == si) 
let montoContribución = prompt ("Ingrese el monto de su aporte")
alert ("el importe a donar es $+ montoContribución")
let nombreYApellido = prompt ("ingrese su nombre y apellido")
alert ("su nombre y apellido es"+  nombreYApellido)
let destino = prompt ("Ingrese a dónde destina su aporte: FAUNA NATIVA - FLORA NATIVA - AMBIENTE")

//Si ingresa FAUNA NATIVA

if (destino == "FAUNA NATIVA")
alert ("ud. contribuye con FAUNA NATIVA, por $" + montoContribución)

//Si ingresa FLORA NATIVA

if (destino == "FLORA NATIVA")
alert ("ud. contribuye con FLORA NATIVA, por $" + montoContribución)

// Si ingresa AMBIENTE

if (destino == "AMBIENTE"){
    alert ("ud. contribuye con AMBIENTE, por $" + montoContribución)
}else {
    alert ("Te agradecemos tu interés")
}