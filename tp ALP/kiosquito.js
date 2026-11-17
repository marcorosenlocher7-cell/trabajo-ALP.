const productos = [
    {
        nombre: "lego mediano",
        precio: 4600,
        Vendidos: 12
    },
    {
        nombre: "Alfajor triple",
        precio: 1600,
        Vendidos: 25
    },
    {
        nombre: "helados",
        precio: 600,
        Vendidos: 25
    }
];

productos.unshift({
        nombre: "pan",
        precio: 1500,
        Vendidos: 10
})

function ganancia(productos) {
    let total = 0;

    productos.forEach(productos => {
        total += productos.precio * productos.Vendidos;
    });

    return total;
}

const MasVendidos = productos.filter(producto => {
    return productos.Vendidos > 15;
});

productos.forEach(productos => {
    console.log(
        "Nombre:", productos.nombre,
        "Precio:", productos.precio,
        "Vendidos:", productos.Vendidos
    );
});


console.log("Cantidad de productos registrados:", productos.length);

let conseguido = ganancia(productos);

console.log("Total conseguido: ", conseguido);

MasVendidos.forEach(productos => {
    console.log(productos.nombre);
});

if (conseguido > 0) {
    console.log("hubo ventas.");
} 
else {
    console.log("No hubo ventas.");
}



if (conseguido > 15500) {
    console.log("Buenas ventas")
}
else {
 console.log("Ventas bajas")
}
console.log("Resultado:", conseguido);
