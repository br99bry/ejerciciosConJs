/* 
Realizar una arrow function que muestre un atributo de cada uno de los objetos de un array de objetos, cuando le
pasemos por parametro un objeto pero dentro del mismo parametro descomponer el objeto que le sera pasado 
*/ 

var listaClientes = [
    { nombre: 'pedro mendoza' , edad: 20 } , {nombre: 'Carlos Perez' , edad: 15} , {nombre: 'Antonio del Rio' , edad: 18}  , { nombre: 'Pablo Morales' , edad: 54}
]

const mostrarClientes = ({nombre},contador) => {
    console.log(`${contador}: ${nombre}`)
}


var contador = 1
    for(var i of listaClientes){
        mostrarClientes(i,contador)
        contador++
    }