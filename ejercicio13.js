
const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = 'people/id/' 
const opciones = { crossDomain: true }


function obtenerPersonaje(id){
    return new Promise(function(resolve,rejected){
        const url = `${API_URL}${PEOPLE_URL.replace('id',id)}`
        $.get(url,opciones,function(data){
            resolve(data)
        }).fail( () => rejected(id) )
    })    
}

//promesas encadenadas

// obtenerPersonaje(1)
//     .then(function (personaje){
//         console.log(`El personaje 1 es ${personaje.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(function (personaje){
//         console.log(`El personaje 2 es ${personaje.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(function (personaje){
//         console.log(`El personaje 3 es ${personaje.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(function (personaje){
//         console.log(`El personaje 4 es ${personaje.name}`)
//     })
//     .catch(function(id){
//         console.log(`sucedio error al obener personake ${id}`)
//     }) 


//promesas en paralelo

var ids = [1,2,3,4,5,6,7]


//esto nos devuelve un arreglo de promesas
var promesas = ids.map(function(id){
    return obtenerPersonaje(id)
})


//con el metodo .all() ejecutamos todas las promesas en pararelo
Promise.all(promesas)
.then(function (personaje){
    console.log(personaje)
    //mostramos el nombre de la primera promesa 
    console.log(personaje[0].name)         
})
.catch(function(id){
    console.log(`sucedio error al obener personake ${id}`)
}) 