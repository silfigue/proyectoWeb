//arreglo que contiene las respuestas correctas
let validas=[1,2,2,2];
//guardan las respuestas del usuario
let opcion_elegida=[];

 //let cantidad correctas=0;
 //funcion que toma el numero de pregunta y el input elegido de esa pregunta
  function respuesta(num_pregunta,selecionada){
    //guardo la respuesta elegida
    opcion_elegida[num_pregunt]=selecionada.value;
    //armo el id para seleccionar el section correspondiente
    id="p"+ num_pregunta;
    labels= document.getElementById(id).childNodes;
    labels[3].style.backGroundColor="white";
    labels[5].style.backGroundColor="white";
    labels[7].style.backGroundColor="white";

    //doy color al label selecionado
    selecionada.parentNode.style.backGroundColor="#cec0fc";
  }
     //funcion que compara y dice cuantas son las correctas
     function corregir(){
        cantidad_correctas=0;
        for( let i=0; i< correctas.length;i++){
            if(correctas[i]==opcion_elegida[i]){
                cantidad_correctas++;
            } 
            console.log(cantidad_correctas);
        }
    document.getElementById("resultado").innerHTML=cantidad_correctas;
     }

     


