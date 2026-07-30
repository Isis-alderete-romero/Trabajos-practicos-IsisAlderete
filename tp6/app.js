let btn1 = document.querySelector ("#btn1")
let btn2 = document.querySelector ("#boton2")
let btn3 = document.querySelector ("#boton3")
let btn4 = document.querySelector ("#boton4")
let btn5 = document.querySelector ("#btn5")
let btn6 = document.querySelector ("#btn6")
let text = document.querySelector ( "#parrafo1")

  
btn1.onclick = function(){
text.textContent= "Hola"
}
btn2.onclick = function(){
    //   Modificar propiedades
    text.style.backgroundColor = 'red'
 }
 btn3.onclick = function(){
    text.style.color = 'darkgreen'
}
btn4.onclick = function(){
    text.style.fontFamily ="IMPACT"
}
btn5.onclick = function(){
    text.style.fontSize ="90px"
    }
btn6.onclick = function(){
        text.style.fontFamily ="Arial"
        text.style.color = "blue"
        text.style.backgroundColor = "cornflowerblue"
        text.style.fontSize ="15px"
        text.textContent= "Adios"

    }

  