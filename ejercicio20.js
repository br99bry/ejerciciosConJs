//Realizar peticiones encadenadas a la API publica de Rick and Morty con callbacks y XMLHttpRequest

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const URL_API = 'https://rickandmortyapi.com/api/character/';

function fetchData(URL_API, callback){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET' , URL_API , true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null , JSON.parse(xhttp.responseText));
            }else{
                const error = 'upps error';
                return callback(error , null);
            }
        }
    }
    xhttp.send();
}


fetchData(URL_API , (error1 , data1) => {
    if(error1){
        return console.log(error1)
    }else{
        fetchData(URL_API+data1.results[1].id , (error2 , data2) => {
            if(error2){
                return console.log(error2)
            }else{
                fetchData(data2.origin.url , (error3 , data3) => {
                    if(error3){
                        return console.log(error3)
                    }else{
                        console.log(`La cantidad de personajes en la API es: ${data1.info.count}`)
                        console.log(`El segundo personaje es: ${data2.name}`)
                        console.log(`Y su dimension es: ${data3.dimension}`)
                    }
                })
            }
        })
    }
    
})