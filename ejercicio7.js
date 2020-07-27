/* 
Crear una clase contructura de objetos y posteriormente de crearla, añadirle un metodo 
*/


function Computadora (marca,ram,procesador,screenSize,hardDiscSize){
    this.marca = marca
    this.ram = ram
    this.procesador = procesador
    this.screenSize = screenSize
    this.hardDiscSize = hardDiscSize
}

Computadora.prototype.mostarDatos = function(){
    console.log(`Marca: ${this.marca}, Ram: ${this.ram}Gb, Procesador: ${this.procesador}, Tamaño de la pantalla: ${this.screenSize}in, Memoria en disco duro: ${this.hardDiscSize}Gb`)
}

var superPower = new Computadora('Lenovo',8,'Intel !7',27,1000)

superPower.mostarDatos()