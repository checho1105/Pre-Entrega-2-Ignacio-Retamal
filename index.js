const productos = [
    {id: 01, nombre: "remera lisa negra", precio: 50},
    {id: 02, nombre: "remera negra adidas", precio: 60},
    {id: 03, nombre: "remera estampada negra", precio: 70},
    {id: 04, nombre: "remera lisa gris", precio: 50},
    {id: 05, nombre: "remera estampada blanca", precio: 70},
    {id: 06, nombre: "remera oversize blanca", precio: 80},
    {id: 07, nombre: "pantalon oversize negro", precio: 100},
    {id: 08, nombre: "pantalon jean", precio: 90},
    {id: 09, nombre: "buzo champions rojo", precio: 100},
    {id: 10, nombre: "campera nike rompe vientos", precio: 120},
];
let carrito = []

let seleccion = prompt("Hola somos ChStore desea comprar algun producto?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola desea comprar algun producto?")
}

if(seleccion === "si"){
    alert("A continuacion nuestra lista de productos")
    let todosLosProductos = productos.map((producto)=> producto.nombre + " " + producto.precio + "$")
    alert(todosLosProductos.join("   ||   "))
} else if(seleccion === "no"){
    alert("Gracias por visitarnos, hasta pronto!!")
}


while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "remera lisa negra" || producto == "remera negra adidas" || producto == "remera estampada negra" || producto == "remera lisa gris" || producto == "remera estampada blanca" || producto == "remera oversize blanca" || producto == "pantalon oversize negro" || producto == "pantalon jean" || producto == "buzo champions rojo" || producto == "campera nike rompe vientos"){
        switch (producto) {
            case "remera lisa negra":
                precio = 50
                break;
            case "remera negra adidas":
                precio = 60
                break;
            case "remera estampada negra":
                precio = 70
                break;
            case "remera lisa gris":
                precio = 50
                break;
            case "remera estampada blanca":
                precio = 70
                break;
            case "remera oversize blanca":
                precio = 80
                break;
            case "pantalon oversize negro":
                precio = 100
                break;
            case "pantalon jean":
                precio = 90
                break;
            case "buzo champions rojo":
                precio = 100
                break;
            case "campera nike rompe vientos":
                precio = 120
                break;
            default:
            break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos el producto solicitado")
    }

    seleccion = prompt("Desea añadir mas productos al carrito?")
    
    while(seleccion === "no"){
        alert("Gracias por la compra, Hasta luego")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

console.log(`El total a pagar es: ${total}`)
