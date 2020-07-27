var articulos = [
    {nombre: "Jabon",precio: 15} , {nombre: "Suavizante", precio: 65} , {nombre: "Cloro",precio: 38}
]

console.log(articulos)
console.log()
console.log()


var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

console.log(nombreArticulos)