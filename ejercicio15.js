//esta es mi primera promesa tratando de entender afondo

// let miPrimeraPromesa = new Promise((resolve,rejected) => {
//     setTimeout(() =>{
//         resolve("se resolvio")
//     },3000)
// })

// miPrimeraPromesa.then((response) => {
//     console.log(response)
// })


//esta es mi primera promesa llevada al siguiente nivel 

function validarUnNumero(numero){
    return new Promise((resolver,rechazar) => {
        setTimeout(() =>{
            if(numero > 5){
                resolver("El numero es mayor a 5")
            }else{
                rechazar("El numero es menor a 5")
            }
        },3000)
    })
}


validarUnNumero(6)
.then((response) => {
    console.log(response)
})
.catch((err) => {
    console.log(err)
})

for(let i=0; i<100; i++){
    console.log(`ejecutando programa principal ${i}`)
}