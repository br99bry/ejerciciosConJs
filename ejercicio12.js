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


obtenerPersonaje(1)
    .then(function (personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(function(id){
        console.log(`sucedio error al obener personake ${id}`)
    }) 