//Ejercicio1

let btn1= document.querySelector ("#btn1")
let text= document.querySelector ("#p1")
let inpu1= document.querySelector ("#inpu1")
let input1= document.querySelector ("#input1")


function mayor(valor1 , valor2) {
   let resultado
   if (valor1 > valor2) {
        return valor1 + " es mayor que " + valor2
       
   } else {
   return valor2 + " es mayor que " + valor1
   }
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
        return valor1 + " es menor que " + valor2
    } else {
        return valor2 + " es menor que " + valor1
    }
}
btn2.onclick = function () {
    text2.textContent = menor (input2.value , inpu2.value)
}

//Ejercicio 3
let btn3= document.querySelector ("#btn3")
let text3= document.querySelector ("#p3")
let inpu3= document.querySelector ("#inpu3")
let input3= document.querySelector ("#input3")

function verificar(valor1 , valor2) {
    if (valor1 == valor2) {
        return valor1 + "y" + valor2 + "son iguales"
    } else {
        return valor1 + "y" + valor2 + "son diferentes"
    }
}

btn3.onclick = function () {
    text3.textContent = menor (input3.value , inpu3.value)
}

//Ejercicio 4

//Ejercio 5
let btn5= document.querySelector ("#btn5")
let text5= document.querySelector ("#p5")
let input5= document.querySelector ("#inpu5")

function saludo(nombre) {
    return "Hola" + nombre + "¿como estas?"
}

btn5.onclick = function () {
    text5.textContent = menor (input5.value)
}

//Ejercicio 6
 function style(params) {
     
 }

 //Ejercicio 7