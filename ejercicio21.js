//Realizar peticiones encadenadas a la API publica de Rick and Morty con promesas y XMLHttpRequest


const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const URL_API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (URL_API) => {
    return new Promise((resolve,reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET',URL_API,true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolve(JSON.parse(xhttp.responseText))
                }else{
                    reject(new Error('Error', URL_API))
                }
            }
        })  
        xhttp.send();      
    })
}

fetchData(URL_API)
.then( response => {
    console.log(response.info.count)
    return fetchData( URL_API + response.results[0].id)
})
.then( response =>{ 
    console.log(response.name)
    return fetchData(response.origin.url)
})
.then( response => {
    console.log(response.dimension)
})
.catch( error => {
    console.log(error)
})

fetchData(URL_API)
.then( response => {
    console.log(response.info.count)
    return fetchData( URL_API + response.results[1].id)
})
.then( response =>{ 
    console.log(response.name)
    return fetchData(response.origin.url)
})
.then( response => {
    console.log(response.dimension)
})
.catch( error => {
    console.log(error)
})

fetchData(URL_API)
.then( response => {
    console.log(response.info.count)
    return fetchData( URL_API + response.results[2].id)
})
.then( response =>{ 
    console.log(response.name)
    return fetchData(response.origin.url)
})
.then( response => {
    console.log(response.dimension)
})
.catch( error => {
    console.log(error)
})