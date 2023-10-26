let jsonDeProductos = `[
    {
        "titulo": "Gorra de plantas",
        "precio": "$12.999,99",
        "imagen": "https://images-na.ssl-images-amazon.com/images/I/61UJKi-JA1L._AC_UX679_.jpg"
     },
    {
        "titulo": "Gorra de animales",
        "precio": "$12.999,99",
        "imagen": "https://images-na.ssl-images-amazon.com/images/I/712MlOTAQmL._AC_UL1200_.jpg"
    },
    {
        "titulo": "Remera de plantas",
        "precio": "$32.999,99",
        "imagen": "https://d22fxaf9t8d39k.cloudfront.net/3d83025f463bca161f25fd17d7d6cee7fb1fdeedd142dfbda4442db299e836691881.jpeg"
    
    },
    {
        "titulo": "Remera de animales",
        "precio": "$32.999,99",
        "imagen": "https://i.pinimg.com/originals/c1/e5/f6/c1e5f697936bab213cb4b612b443699b.jpg"
    }
    ]`
    
    
    let jsonConvertido = JSON.parse(jsonDeProductos)
    let carrito =[];
    for (let i = 0; i <jsonConvertido.length; i++){
    
        
    let article = document.createElement("article")
    
    let h3 = document.createElement("h3")
    h3.innerText = jsonConvertido[i].titulo
    
    let img = document.createElement("img")
    img.style.width = "45%"
    img.src = jsonConvertido[i].imagen

    //Agregar un evento al pasar el mousse sobre la imagen, y al quitarlo

    img.addEventListener("mouseover", function(){
        img.style.width = "80%";
    }
    );
    
        
    img.addEventListener("mouseout", function(){
        img.style.width = "45%";
    }
    ); 
        
    
    let p = document.createElement("p")
    p.innerText = jsonConvertido[i].precio;
    
    
    let boton = document.createElement("button")
    boton.innerText = "Agregar al carrito";

    boton.addEventListener("click", function () {
        // Cuando se haga clic en el botón "Agregar al carrito", se agrega el producto al carrito
        agregarProductoAlCarrito(jsonConvertido[i]);
      });
      article.appendChild(h3)
      article.appendChild(img)
      article.appendChild(p)
      article.appendChild(boton)

      document.getElementById("productos").appendChild(article);

      
    }
    
    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
      
      carrito.push(producto);
    
      // Actualiza la visualización del carrito
      mostrarCarrito();
    }
    
    // Función para mostrar el contenido del carrito
    function mostrarCarrito() {
      const listaCarrito = document.getElementById("listaCarrito");
      listaCarrito.innerHTML = ""; // Borra el contenido anterior del carrito
    
      carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.innerText = producto.titulo;
        listaCarrito.appendChild(li);
      });
    }

//////
// Agrega esta función al final de tu script
function finalizarCompra() {
    
carrito = []; // Vacía el carrito
  
// Actualiza la visualización del carrito
mostrarCarrito();
    
    alert("¡Compra finalizada con éxito!");
  }
    
// Asocia el botón "Finalizar Compra" con la función
const finalizarCompraBtn = document.getElementById("finalizarCompraBtn");
finalizarCompraBtn.addEventListener("click", finalizarCompra);
    

    
    

    
    
    
     
      
          
    
                         
    
    
        
     
    
    
    






