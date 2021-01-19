function producto(nombre, precio, modelo, tipo, numero){
	this.nombre = nombre;
	this.precio = precio;
	this.modelo = modelo;
	this.tipo = tipo;
	this.numero = numero;
}
var kimetsu = new producto("Kimetsu movie book", 1000, "Especial", "Libro", "1")
var kimetsu2 = new producto("Parca Kimetsu no yaiba", 6000, "L", "Ropa", "2")
var onePiece = new producto("Llavero One piece", 200, "Unico", "Llavero", "3")
var onePiece2 = new producto("Funko Pop Chopper One Piece", 3000, "Unico", "Funko Pop", "4")
var onePiece3 = new producto("Llavero y tsuka para llave Kimetsu", 400, "Unico", "Llavero", "5")
var pocky = new producto("Pocky", 290, "50g", "Comida", "6")
var kracie = new producto("Kracie Popin’ Cookin' Animal Pancake", 490, "Unico", "Comida", "7")
var kracie2 = new producto("Kracie Popin' Cookin' Ice Cream Cake ", 460, "Unico", "Comida", "8")
var kimetsu3 = new producto("Nendoroid Nezuko Kamado", 6000, "Unico", "Nendroid", "9")
var jojo = new producto("Llavero mascara JoJo", 600, "Unico", "Llavero", "10")
var list = [0, kimetsu, kimetsu2, onePiece, onePiece2, onePiece3, pocky, kracie, kracie2, kimetsu3, jojo]
var total = 0
function calcular(){
	var numProductos = prompt("Cuantos producto desea comprar?")
	while(numProductos < 1 || isNaN(numProductos)){
		numProductos = parseInt(prompt("Ingrese un numero valido"))
	}
	for(count = 1;count != 11; count++){
		console.log(list[count].numero + " " + list[count].nombre)
	}

	for(;numProductos > 0; numProductos--){
		var productos = prompt("Seleccione un numero de producto")
		while(productos < 1 || productos > 10 || isNaN(productos)){
      		productos = parseInt(prompt("Ingrese un numero valido"))
    	}
		total = total + list[productos].precio
		console.log(list[productos].nombre)
	}
	console.log("El total seria de ¥" + total)
}
