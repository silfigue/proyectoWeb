 //const Usuario = {
    //nombre:"Paula",
    //dni:"34804013",
   // email:"paula_s_89@hotmail.com",
    //pass: "123456"
  //};
 //const Json=const json = '{
    //"name": "Paula" ,
    //"dni": "34804013",
    //"email":"paula_s_89@hotmail.com",
    //"pass" : "123456",
      //}';

 //const Usuario=JSON.parse(json)
//  console.log(Usuario);
  
      

                     
 //}
 //let Usuario = { Nombre: ‘Paula’, dni: ‘34804013’,contraseña:‘123456’  };
    //let datoConvertido = JSON.stringify(Usuario);
    //console.log(datoConvertido)
    // ‘{“Nombre”:”Paula”, “dni”:”123456”}’

    //localStorage.setItem('Bienvenida a Nuestra')
    //pass localStorage.setItem('esValido',true);

    window.onload = () => {
        let boton = document.querySelector("button");
        localStorage.setItem("usuarioRegistrado")
       let inputUsuario = document.getElementById("username").value;
        if (inputUsuario == localStorage.getItem("usuarioRegistrado",true)) {
        let p = document.createElement("p")

        document.querySelector("p").innerText ="Ingreso con exito"
        sessionStorage.setItem("sesionIniciada",true)
        sessionStorage.setItem("username",inputUsuario)
        console.log(sessionStorage);
    }else{
        let p = document.createElement("p")
        p.innerText= "Intente de nuevo"
        document.querySelector("form").appendChild(p)
    }
      
    }

       


 function tomarDatos(){
    let nombre= document.getElementById("nombre").value;
    let email= document.getElementById("email").value;
    let mensaje=document.getElementById("mensaje").value;

    console.log(nombre,email,mensaje);
    if(nombre && email && mensaje){
        let parrafo=document.createElement("p");
        parrafo.innerText="tu nombre,tu email ha sido registrado"
    }
 }

//const emailInput = document.querySelector("input[name='email']");
//const email = emailInput.value;

//if (!validarEmail(email)) {
  // Mostramos un mensaje de error
  //alert("El correo electrónico no es válido");}


 
 let arrayDeProductos=[{
    titulo:"Gorra de plantas",
    precio:12.999,
    imagen:"https://ae01.alicdn.com/kf/S1a5a9a9c7b474e358ee61896a038491d5/Gorra-de-verano-para-mujer-sombrero-de-sol-con-estampado-de-hojas-azules-y-plantas-tropicales.jpg",
 },
{
    titulo:"Gorra de animal",
    precio:12.999,
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37sfGu5QFZSlmyCN12M7lZ3rxar5C1nLaVQ&usqp=CAU",
},
{
    titulo:"Remera de plantas",
    precio:12.999,
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUR_tbJehGDAD3AVsclPXlifXHXwJZNGeSqM5BAc1ZpHs4JZjX_18QK7xt_8cStU5ysGc&usqp=",

},
{
    titulo:"Remera de animales",
    precio:12.999,
    imagen:"https://http2.mlstatic.com/D_NQ_NP_655243-MLA41121980841_032020-O.webp",
},
]

for(let i=0;i < arrayDeProductos.length;i++){
    let article = document.createElement("article")
    let imagen = document.createElement("img")
    let titulo = document.createElement("h3")
    let precio=document.createElement("p")

    imagen.src=arrayDeProductos[i].tituloprecio.innerText="$"+ arrayDeProductos[i].precio

    article.appendChild(imagen)
    article.appendChild(titulo)
    article.appendChild(precio)

    document.querySelector("section.listado").appendChild(article)
}

                        