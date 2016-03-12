var lado = parseInt(prompt("Dibujaremos el perimetro de un cuadrado, dame el numero de asteriscos que tendrá por Lado"));

for (var x = 0; x < lado; x++) {   //Eje de las X
	var renglon = ""; //Inicializamos la variable con texto vacío que nos dibujará la matriz, en este caso el cuadrado
	for(var y = 0; y < lado; y++){ 
		if(x == 0 || x == lado - 1){

			renglon += "*\t" // los tabs son necesarios para acomodar los *

		}
		else if(y == 0 || y == lado - 1){

			renglon += "*\t";

		}else {

			renglon += "\t";	

		}
	};
	console.log(renglon);
	
};

/*
NOTA: En el navegador Chrome, estaba "comprimiendo", por decirlo de alguna manera
, el eje de las Y, sin embargo en IE si me imprimía en consola el cuadrado completo 
*/
