/*
Crear una clase con atributos y metodos en js e instanciar objetos de la misma, luego mostrar objetos en consola
*/

class Persona{
    constructor(nombre,apellidos,edad,nacionalidad,nivelDeEstudios){
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
        this.nacionalidad = nacionalidad 
        this.nivelDeEstudios = nivelDeEstudios
    }

    mostrarInformacion(){
        console.log(`Nombre completo: ${this.nombre} ${this.apellidos}, Edad: ${this.edad}, Nacionalidad: ${this.nacionalidad}, Nivel Educativo: ${this.nivelDeEstudios}`)
    }
}

var pablo = new Persona('Pablo','Morales Dominguez',58,'Aleman','Doctor')

pablo.mostrarInformacion()