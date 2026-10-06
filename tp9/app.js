//Ejercicio1

let btn1= document.querySelector ("#btn1")
let text= document.querySelector ("#p1")
let inpu1= document.querySelector ("#inpu1")
let input1= document.querySelector ("#input1")


function mayor(valor1 , valor2) {
   let resultado
   if (valor1 > valor2) {
       resultado = valor1 + " es mayor que " + valor2
   } else {
    resultado = valor2 + " es mayor que " + valor1
   }
   return resultado
}

btn1.onclick = function(){
    text.textContent = mayor (input1.value , inpu1.value) 
}

//Ejercicio2

let btn2= document.querySelector ("#btn2")
let text2= document.querySelector ("#p2")
let inpu2= document.querySelector ("#inpu2")
let input2= document.querySelector ("#input2")

function menor(valor1 ,valor2) {
    let resultado
    if (valor1 < valor2) {
        resultado = valor1 + " es menor que " + valor2
    } else {
        resultado = valor2 + " es menor que " + valor1
    }
}
btn2.onclick = function () {
    text2.textContent = menor (input2.value , inpu2.value)
}