//Ejercicio1
let text1 = document.querySelector ("text1")
let utiles= ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"]

console.log (utiles)
console.log (utiles[0])
console.log (utiles[2])
console.log(utiles[utiles.length - 1])
console.log(utiles.length)
utiles.push("Mochila")
console.log (utiles)
utiles.unshift("Cartuchera")
console.log (utiles)
console.log(utiles[utiles.length - 1])
console.log (utiles[6])
utiles.pop()
console.log (utiles)
utiles.shift()
console.log (utiles)
console.log(utiles[utiles.length - 1])

//Ejercicio2
let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"]
console.log(productos)
console.log(productos.length)
productos.push("Azúcar")
productos.push("Yerba")
productos.push("Café")
console.log (productos)
productos.unshift("Sal")
productos.unshift("Galletitas")
console.log (productos)
console.log(productos.length)
console.log(productos[9])
productos.pop()
console.log(productos[8])
productos.pop()
console.log(productos)
console.log(productos[9])
productos.shift()
console.log(productos)
console.log(productos[productos.length - 1])

//Ejercicio 3
let productos2 = ["Teclado","Mouse","Monitor","Auriculares","Webcam","Parlantes"]
console.log(productos2[productos2.indexOf("Mouse")])
console.log(productos2[productos2.indexOf("Monitor")])
console.log(productos2[productos2.indexOf("Webcam")])

let pos = productos2.indexOf("Teclado")
if (pos == false) {
    console.log("Teclado no esta registrado")
} else {
    console.log("Teclado esta registrado")
}

let pos1 = productos2.indexOf("Impresora")
if (pos1 == false) {
    console.log("Impresora no esta registrado")
} else {
    console.log("Impresora esta registrado")
}
productos2.indexOf("Impresora")

console.log(productos2.length)

//Ejercicio 4
let videojuegos = ["Minecraft", "Pokémon Cristal","Super Mario", "The Legend of Zelda","Sonic"]
console.log(videojuegos)
console.log(videojuegos.length)
videojuegos.push("Animal Crossing")
videojuegos.push("Pokémon Rojo")
console.log(videojuegos)
videojuegos.unshift("Tetris")
videojuegos.unshift("Pac-Man")
console.log(videojuegos)
let pos3 =videojuegos.indexOf("Pokémon Cristal")
console.log(pos3)
let pos4 =videojuegos.indexOf("Sonic")
console.log(pos4)
let pos5 =videojuegos.indexOf("Fifa")
console.log(pos5)
videojuegos.pop()
console.log(videojuegos)
console.log(videojuegos.length)

//Ejercicio 5
let estudiantes = ["Martina","Lucas","Sofía","Tomás","Valentina"]
console.log(estudiantes)
estudiantes.push("Agustín")
estudiantes.push("Camila")
estudiantes.unshift("Bruno")
console.log(estudiantes.length)
let pos6 =estudiantes.indexOf("Sofía")
console.log(pos6)
let pos7 =estudiantes.indexOf("Camila")
console.log(pos7)
let pos8 =estudiantes.indexOf("Federico")
console.log(pos8)
console.log(estudiantes[0])
estudiantes.shift()
console.log(estudiantes[7])
estudiantes.pop()


