//Crear un arreglo de objetos y con el metodo filter() filtrar algun atributo puesto en alguno de los objetos e imprimirlo en consola

var personas = [
    {nombre: "alicia"},{nombre: "juan"},{nombre: "bertha"}
]

var personaFiltrada = personas.filter(
    function(persona){
        return persona.nombre === "juan"
    }
)

console.log(personaFiltrada)