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
    for (let i = 0; i <jsonConvertido.length; i++){
    
        
    let article = document.createElement("article")
    
    let h3 = document.createElement("h3")
    h3.innerText = jsonConvertido[i].titulo
    
    let img = document.createElement("img")
    img.style.width = "45%"
    img.src = jsonConvertido[i].imagen
    
    let p = document.createElement("p")
    p.innerText = jsonConvertido[i].precio
    
    
    let boton = document.createElement("button")
    boton.innerText = "Agregar al carrito"
    
    article.appendChild(h3)
    article.appendChild(img)
    article.appendChild(p)
    article.appendChild(boton)
    
    document.getElementById("productos").appendChild(article)
    }
    
    let sectioncarrito = document.getElementById ("carrito")
    sectioncarrito.addEventListener ("focus", () => {
    sectioncarrito.style.border = "2px solid red"
    }
    )
    
    

    
        
    
    
    
    
     
      
          
    
                         
    
    
        
     
    
    
    






