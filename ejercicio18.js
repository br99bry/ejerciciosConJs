

async function consultaAsincrona(){
    
        const consultaStarWars = await fetch('https://swapi.dev/api/people/1/')
        const respuestaLegible = await consultaStarWars.json()
        console.log(respuestaLegible)
        const peliculasPersonaje = await fetch(respuestaLegible.films[0])
        const peliLegible = await peliculasPersonaje.json()
        console.log(peliLegible)
        return peliLegible
    
}

consultaAsincrona()
.then((response) => console.log(`El primer film de ${response.director} es ${response.title}`))



for(let i=0;i<10;i++){
    console.log('hola' + i)
}

