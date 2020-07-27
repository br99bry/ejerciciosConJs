/*
Asincronismo en js 
Cuando nosotros ejecutamos el siguiente codigo nos vamos 
a dar cuenta de que el setTime out es una tarea que 
js le encomienda al navegador y cuando este resuelva la tarea la pondra 
en una cola de ejecucion que no se ejecutara hasta que js termine
de ejecutar las instrucciones de su programa principal

*/



/*--------------para ejecutar descomenta el codigo */
// console.log('a')

// setTimeout(
//     function(){
//         console.log('b')
//     },0
// )

// console.log('c')


/*----------------para ejecutar descomenta el codigo */

setTimeout(() => console.log('d'),2000)

for( var i =0; i<1000000000; i++){

}

