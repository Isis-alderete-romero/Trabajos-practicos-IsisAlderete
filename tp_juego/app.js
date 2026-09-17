let text1 = document.querySelector ("#text1")
let btn1 = document.querySelector ("#btn1")
let numero = 0

btn1.onclick = function () {
    numero = numero + 1
    text1.textContent = numero + " galletitas"
    if (numero > 10) {
        text1.style.color = 'green'

    }
    if (numero > 20) {
        text1.style.color = 'blue'

    }
    if (numero > 30) {
        text1.style.color = 'red'

    }
}

