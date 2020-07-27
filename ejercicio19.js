const imagen = document.getElementById('imagen')

const ponerImagen = async () => {
    const promesa = await fetch('https://yts.mx/api/v2/list_movies.json?limit=1&genre=action&page=3')
    const response = await promesa.json()
    const pelicula = response.data.movies[0].large_cover_image
    imagen.setAttribute('src',pelicula)
}

ponerImagen()