//Crear una funcion construtora e instranciar un nuevo objeto de esta al final muestra los datos del objeto instanciado

function persona(nombre,apellido,edad,dedicacion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dedicacion = dedicacion;
}

var Jorge = new persona("Jorge","Gonzalez",25,"Ingeniero en computacion");
console.log(Jorge)