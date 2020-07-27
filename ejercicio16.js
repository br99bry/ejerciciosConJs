//el ejercicio anterior muestra como funcionan las promesas, ahora que ya lo sabemos
//usamos fetch api que implementa java script para obtener recursos de un servidor
//fetch lo que devuelve es una promesa como la del ejecicio anterio de valdiad un numero

//ejercicio: consultar datos en la api de star wars vista en ejercicios anteriores

fetch('https://swapi.dev/api/people/1/')
.then((response) => {
    return response.json()
})
.then((data) => {
    return fetch(data.films[0])
})
.then((peliSolicitada) => {
    return peliSolicitada.json()
})
.then((peli) => {
    console.log(peli)
})
.catch((error) => {
    console.log(error)
})