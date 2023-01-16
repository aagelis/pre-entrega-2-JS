
const productos = [
    { nombre: "mouse", precio: 1000 },
    { nombre: "teclado", precio: 2000 },
    { nombre: "monitor", precio: 5000 },
    { nombre: "auriculares", precio: 3000 },
    { nombre: "mousepad", precio: 500 },
    { nombre: "microfono", precio: 2500 },
];

let carrito = []

let seleccion = prompt("Bienvenido a nuestra tienda desea comprar algo si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("Ingrese si o no para una opcion valida ")
    seleccion = prompt("Bienvenido a nuestra tienda desea comprar algo si o no")
}

if (seleccion == "si") {
    alert("Esta es nuestra lista de productos")
    let listaDeProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$");
    alert(listaDeProductos.join(" / "))
} else if (seleccion == "no") {
    alert("Gracias por visitarnos");
}


while (seleccion != "no") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0
    if (producto == "mouse" || producto == "teclado" || producto == "monitor" || producto == "auriculares" || producto == "mousepad" || producto == "microfono") {
        switch (producto) {
            case "mouse":
                precio = 1000;
                break;
            case "teclado":
                precio = 2000;
                break;
            case "monitor":
                precio = 5000;
                break;
            case "auriculares":
                precio = 3000;
                break;
            case "mousepad":
                precio = 500;
                break;
            case "microfono":
                precio = 2500;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantos quiere llevar?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }
    seleccion = prompt("Desea seguir comprando?")  
    while(seleccion === "no"){
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal) => {
            alert(`Usted solicitó estos productos ${carritoFinal.producto}, unidades : ${carritoFinal.unidades}, su cuenta total a pagar es ${carritoFinal.unidades * carritoFinal.precio}`)
        } )
    break;
    }
}

const total = carrito.reduce ((acc, totals) => acc + totals.precio * totals.unidades, 0)
alert(`el total a pagar por su compra es: ${total}`)