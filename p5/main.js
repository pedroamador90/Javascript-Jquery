

/* Actividad 1 */
function telefono (numero, marca, color){
  this.numero = numero;
    this.marca = marca;
    this.color = color;
    this.contador = 0;
    this.marcar =  function(){ /*actividad 2 */
    	this.contador ++;
    };
};


console.log("Actividad 1");
var arrTelefonos = new telefono('8112759805', 'Nexus', 'Plata'); //llamamos la función telefono y lo metemos al arreglo arrTelefonos
console.log(arrTelefonos); // Imprimo arrtelefonos
/* termina actividad 1 */


/* Ejecución actividad 2*/
arrTelefonos.marcar(); //Al abrir el primer arreglo que imprimimos, de debe mostrar contador = 3
arrTelefonos.marcar();
arrTelefonos.marcar();
/*termina Ejecución actividad 2 */



/* Actividad 3 */

var arreglo = [];

arreglo.push(new telefono('8112759805', 'Nexus', 'Plata'));
arreglo.push(new telefono('8112759806', 'Samsung', 'Azul'));
arreglo.push(new telefono('8112759807', 'Apple', 'Rosita'));
arreglo.push(new telefono('8112759808', 'Sony', 'Negro'));

function MostrarCelPorMarca(arreglotelefono,marcamostrar  ){
	var arregloCel = arreglotelefono.filter(function(a) {
		return a.marca.toUpperCase() == marcamostrar.toUpperCase();
	});

	return arregloCel;
}
console.log("Actividad 3")
console.log(arreglo);

var marca = prompt("Dame el celular que quieres filtrar")
console.log(MostrarCelPorMarca(arreglo,marca));

/*Termina actividad 3 */