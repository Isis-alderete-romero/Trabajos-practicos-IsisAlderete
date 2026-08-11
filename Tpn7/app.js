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
let edad2= 70

btn5.onclick = function () {
    if ((edad2 > 6) && (edad2 < 11)) {
        text5.textContent = "Niño(6 a 11)"
    }    else if ((edad2 > 12) && (edad2 < 18)) {
        text5.textContent= "Adolescente (12 a 18 años"
    }    else if((edad2 > 19) && (edad2 < 26)){
        text5.textContent= "Joven (19 a 26 años)"
    }else if((edad2 > 27) && (edad2 < 59)){
        text5.textContent= "Adulto (27 a 59 años)"
    } else{ 
        text5.textContent= "Anciano (60 años o más)"
    }
}
// Ejercicio 6
let text6= document.querySelector ("#ej6")
let btn6 =document.querySelector ("#btn6")
let dia = sabado

btn6.onclick = function () {
    if ((dia = "lunes") || (dia = "martes")) {
        text2.textContent = "Es un día laborable"
    }    else {
        text2.textContent= "Es fin de semana"
    }
}