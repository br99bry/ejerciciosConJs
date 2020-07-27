//hacer consultas a la api de rick and morty

            

const URL_RICKANDMORTY_API_BASE = 'https://rickandmortyapi.com/api/'
const CHARACTERS_URL = 'character'

function imagePersona(){
    fetch(`${URL_RICKANDMORTY_API_BASE}${CHARACTERS_URL}`)
.then((respuestaJson) => {
    return respuestaJson.json()
})
.then((data) => {
    //console.log(data.results[0].image)
    let miImagen = data.results[0].image
    //console.log(miImagen)
    let ponerImagen = document.getElementById('imagen').setAttribute('src',miImagen)
})
.catch((err) => {
    console.log(err)
})
}

imagePersona()
