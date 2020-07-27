
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



//siguiendo el ejercicio anterior, ahora se muestra como resolver todas las 
//promesas usando funciones async await


async function obtenerPersonajes() {
    
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id))

    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }catch(id){
        console.log(`sucedio error al obener personake ${id}`)
    }
}


obtenerPersonajes()