/*
    lo que vamos a hacer en este ejercicio es agregar un parametro
    que llamaremos callback y condicionaremos que si recibe el 
    parametro pues invoque es callback o funcion que sera pasada por 
    parametro, entonces este callback debe ser como se muestra en
    el codigo una funcion anonima que invoque nuevamente a la
    funcion obtender personas pero ahora con distintos id para 
    hacer varios reques a la API en el orden requerido
*/


const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = 'people/id/' 
const opciones = { crossDomain: true }


function obtenerPersonaje(id,callback){
    
    
    const url = `${API_URL}${PEOPLE_URL.replace('id',id)}`
    $.get(url,opciones,function(persona){
        console.log(`Hola, yo soy ${persona.name}`)
    })
    
    if(callback){
        callback()
    }
    


}


//notamos como es hace un callback hell lo que significa que 
// nuestro codigo ya se ve muy feo y dificil de leer como
// a continuacion

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3,function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5,function(){
                    obtenerPersonaje(6)
                })
            })
        })
    })
})