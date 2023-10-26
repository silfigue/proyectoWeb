const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validar el campo Nombre y Apellido
  const nombreYapellido = document.getElementById("nombreYapellido");
  if (nombreYapellido.value.trim() === "") {
    alert("Por favor, ingresa tu Nombre y Apellido.");
    return;
  }

  // Validar el campo Teléfono
  const telefono = document.getElementById("telefono");
  if (telefono.value.trim() === "" || !/^\d{10}$/.test(telefono.value)) {
    alert("Por favor, ingresa un número de teléfono válido de 10 dígitos.");
    return;
  }

  // Validar el campo Correo Electrónico
  const userEmail = document.getElementById("user-email");
  if (userEmail.value.trim() === "" || !/^\S+@\S+\.\S+$/.test(userEmail.value)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Validar la selección de un monto de donación
  const montoRadios = document.querySelectorAll('input[name="monto"]');
  let montoSeleccionado = false;
  montoRadios.forEach((radio) => {
    if (radio.checked) {
      montoSeleccionado = true;
    }
  });
  if (!montoSeleccionado) {
    alert("Por favor, selecciona un monto de donación.");
    return;
  }

  // Si todo está validado, puedes enviar el formulario o realizar otras acciones aquí
  // form.submit(); // Envía el formulario
  // O realiza alguna otra acción, como mostrar un mensaje de éxito

  alert("Formulario validado con éxito. Gracias por sumarte a proteger nuestr@ mundo.");
});





















// let inputNombreYapellido = document.getElementById ("nombreYapellido")
//  inputNombreYapellido.addEventListener ("blur", () =>{
//    if (inputNombreYapellido.value ==""){
//   inputNombreYapellido.style.border = "2px solid red"
// }else{
//  inputNombreYapellido.style.border = "0"
//  }
//  }
//  )
    

//     let inputDni = document.getElementById ("dni")
//     inputDni.addEventListener ("blur", () =>{
//     if (inputDni.value ==""){
//     inputDni.style.border = "2px solid red"
//     }else{
//     inputDni.style.border = "0"
//     }
//     }
//     )


//     let inputEmail = document.getElementById ("email")
//     inputEmail.addEventListener ("blur", () =>{
//     if (inputEmail.value ==""){
//     inputEmail.style.border = "2px solid red"
//     }else{
//     inputEmail.style.border = "0"
//     }
//     }
//     )


// let inputPass = document.getElementById ("pass")
//     inputPass.addEventListener ("blur", () =>{
//     if (inputPass.value ==""){
//     inputPass.style.border = "2px solid red"
//     }else{
//     inputPass.style.border = "0"
//     }
//     }
//     )


//     let inputRepeatPass = document.getElementById ("repeatPass")
//     inputRepeatPass.addEventListener ("blur", () =>{
//     if (inputRepeatPass.value ==""){
//     inputRepeatPass.style.border = "2px solid red"
//     }else{
//     inputRepeatPass.style.border = "0"
//     }
//     }
//     )
















































































































// const email = document.getElementById("user-email");
// const telefono = document.getElementById("telefono");
// const nombreYapellido = document.getElementById("nombreYapellido");
// const btnValidar = document.querySelector(".btn-sub1");
// const aviso = document.querySelector(".texto-aviso");
// const correoRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]))+$/;



// //----validación-----
// btnValidar.addEventListener ("click", e=>{
// e.preventDefault();
// let email = user-email.value.trim();
// let telefono = telefono.value.trim();
// let nombreYapellido = nombreYapellido.value.trim();

// if (!user-email){
//   mostrarAviso ("ingresá una dirección de email válida");
// }
// if (!telefono){
//   mostrarAviso ("ingresá un télefono con 14 caracteres");

// }
// else if (!nombreYapellido){
//   mostrarAviso ("ingresá letras sin carácteres ni números");
// }
// else if (!correoRegex.test(correo)){
//   mostrarAviso ("ingresá un correo electrónico válido");
// }


// });
// function mostrarAviso (mensaje){
//  aviso.style.color = "#FF2020";
//  aviso.style.fontWeight = "800";
//  aviso.textContent = mensaje;
//  aviso.style.visiblility = "inherit";
// }








































































































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
*/