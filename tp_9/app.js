//Ejercicio1
let text1 = document.querySelector ("text1")
let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"]

console.log (utiles)
console.log (utiles(0))
console.log (utiles(2))
console.log(utiles[utiles.length - 1])
console.log(utiles.length)
utiles.push("Mochila")
console.log (utiles)
utiles.unshift("Cartuchera")
console.log (utiles)
console.log(utiles[utiles.length - 1])
console.log (utiles(6))
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
console.log(productos(9))
productos.pop()
console.log(productos(8))
productos.pop()
console.log(productos)

