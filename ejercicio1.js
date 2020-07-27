//Crear un arreglo de objetos y con el ciclo for of mostrar los atributos de cada uno de los objetos almacenados en el array

var clientes = [
    {nombre: 'juan',edad: 25},{nombre:'pedro',edad: 14},{nombre: 'paco',edad: 78}
]

for(var i of clientes){
    console.log(`Hola amigo ${i.nombre} tu tienes ${i.edad} años`)
}