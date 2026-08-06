//Ejercicio 1
let text= document.querySelector ("#ej1")
let btn1 =document.querySelector ("#btn1")
let edad=20

btn1.onclick = function () {
    if (edad >= 18) {
        text.textContent = "Sos mayor de edad"
    }    else {
        text.textContent= "Sos menor de edad"
    }
}
//Ejercicio 2 y 3
let text2= document.querySelector ("#ej2")
let btn2 =document.querySelector ("#btn2")
let nombreUsuario = "Nahuel"

btn2.onclick = function () {
    if ((nombreUsuario = "Nahuel") || (nombreUsuario = "Marcos")) {
        text2.textContent = "Bienvenido" + nombreUsuario + "¿Como estas?"
    }    else {
        text2.textContent= "Bienvenido" + nombreUsuario
    }
}

//Ejercicio 4
let text4= document.querySelector ("#ej4")
let btn4 =document.querySelector ("#btn4")
let numero= 10

btn4.onclick = function () {
    if (edad > 0) {
        text4.textContent = "El numero es positivo"
    }    else if (edad > 0) {
        text4.textContent= "El numero es negativo"
    } else{
        text4.textContent= "El numero es cero"
    }
}
// Ejercicio 5
let text5= document.querySelector ("#ej5")
let btn5 =document.querySelector ("#btn5")
let edad= 6

btn5.onclick = function () {
    if ((edad > 6) && (edad < 11)) {
        text4.textContent = "Niño(6 a 11)"
    }    else if ((edad > 12) && (edad < 18)) {
        text4.textContent= "Adolescente (12 a 18 años"
    }    else if{
        text4.textContent= "Joven (19 a 26 años)"
    }
}
