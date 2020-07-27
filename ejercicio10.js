// en este ejercicio vamos a consultar informacion de la API swapi.dev 
// con ayuda de jquey

//guardamos las url para hacer las consultas
// const API_URL = "https://swapi.dev/api/"
// const PEOPLE_URL = 'people/id/'
// const lukeUrl =  `${API_URL}${PEOPLE_URL.replace('id','1')}` 
// const opciones = { crossDomain: true }
//hacemos la peticion a la API con jquery

// $.get(lukeUrl,opciones,function(luke){
//     console.log(`Hola yo soy ${luke.name}`)
// })



//----------Este es un segundo programa, para hacer funcionar el de
//arriba, comenta este y descomenta el de arriba

const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = 'people/id/' 
const opciones = { crossDomain: true }

const onPeopleResponse = function(persona){
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace('id',id)}`
    $.get(url,opciones,onPeopleResponse)
}


/*Al hacer varios request, notaremos que da como resultado 
que en consola se ejecutan en distinto orden al que fueron 
enviadas, es decir, las personas no llegaran en orden
que pedimos: 1,2,3,4 si no en distinto orden
esto se debe al asincronismo de java script
no sabemos en cuanto tiempo se van a resolver estas tareas y por lo tanto en que orden se van a acomodar en la cola de tareas*/
for(var i=1; i<5; i++){
    obtenerPersonaje(i)
}