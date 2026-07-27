let btn1 = document.querySelector ("#boton1")
let btn2 = document.querySelector ("#boton2")
let btn3 = document.querySelector ("#boton3")
let btn4 = document.querySelector ("#boton4")
let text = document.querySelector ( "#parrafo1")
  
btn1.onclinck = function(){
text.textContent= "Hola"
}
btn2.onclinck = function(){
    //   Modificar propiedades
    text.style.backgroundColor = 'red'
    }


  