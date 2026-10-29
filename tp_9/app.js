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
console.log(estudiantes)
console.log(estudiantes.length)

//Ejercicio 6
let tareas = ["Estudiar","Hacer la tarea","Ordenar la habitación","Comprar alimentos"]
console.log(tareas)
tareas.push("Pasear al perro")
tareas.push("Preparar la cena")
console.log(tareas)
tareas.unshift("Entregar un trabajo")
console.log(tareas)
let pos9 =tareas.indexOf("Estudiar")
console.log(pos9)
let pos10 =tareas.indexOf("Preparar la cena")
console.log(pos10)
let pos11= tareas.indexOf("Lavar el auto")
console.log(pos11)
console.log(tareas[0])
tareas.shift()
console.log(tareas[6])
tareas.pop()
tareas.push("Leer un libro")
tareas.unshift("Hacer ejercicio")
console.log(tareas)
console.log(tareas.length)

//Ejercicio7
let peliculas = ["Toy Story", "Shrek","Buscando a Nemo","Los Increíbles", "Ratatouille"]
console.log(peliculas)
console.log(peliculas.length)
peliculas.push("Cars")
peliculas.push("Monsters, Inc.")
console.log(peliculas)
peliculas.unshift("Intensamente")
peliculas.unshift("Coco")
console.log(peliculas)
let pos12=peliculas.indexOf("Shrek")
console.log(pos12)
let pos13=peliculas.indexOf("Coco")
console.log(pos13)
let pos14=peliculas.indexOf("Frozen")
console.log(pos14)
let pos15=peliculas.indexOf("Cars")
console.log(pos15)
if (pos15=true) {
    console.log("Esta en la lista")
} else {
    console.log("No esta en la lista")  
}
console.log(peliculas[9])
peliculas.pop()
console.log(utiles[0])
peliculas.shift()
peliculas.push("Up")
let pos16=peliculas.indexOf("Up")
console.log(pos1)
console.log(peliculas)
console.log(peliculas.length)

//Ejercicio 8
let productosTienda = [ "Celular","Notebook","Tablet","Teclado", "Mouse"]
console.log(productosTienda)
console.log(productosTienda.length)
productosTienda.push("Monitor")
productosTienda.push("Impresora")


