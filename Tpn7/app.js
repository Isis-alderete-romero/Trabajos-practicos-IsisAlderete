//Ejercicio 1
let text= document.querySelector ("#ej1")
let btn1 =document.querySelector ("#btn1")
let edad=20

btn1.onclick = function (){
    if (edad >= 18) {
        text.text.textContent= "Sos mayor de edad"
    }    else {
        text.text.textContent= "Sos menor de edad"
    }
}