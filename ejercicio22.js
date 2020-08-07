//Realizar peticiones encadenadas a la API publica de Rick and Morty con async/await y XMLHttpRequest

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const URL_API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (URL_API) =>{
    return new Promise( (resolve , reject) =>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET' , URL_API , true);
        xhttp.onreadystatechange = () =>{
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolve(JSON.parse(xhttp.responseText))
                }else{
                    reject(new Error('Error' + URL_API))
                }
            }
        }
        xhttp.send();
    } )
}

const asyncFetchData = async () =>{
    
    try{
        const personajesList = await fetchData(URL_API);
        const infoPrimerPersonaje = await fetchData(`${URL_API}${personajesList.results[1].id}`)
        const infoOrigen = await fetchData(`${infoPrimerPersonaje.origin.url}`)

        console.log("La cantidad de personajes es: "+personajesList.info.count);
        console.log(`El segundo personaje es: ${infoPrimerPersonaje.name}`);
        console.log(`Su dimension es: ${infoOrigen.dimension}`);
    }catch(error){
        console.log(error);
    }
    
} 

asyncFetchData();