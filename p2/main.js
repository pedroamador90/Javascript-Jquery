var suma = 0;

/*
Entramos por primera vez, validamos si no es fin y también si es un entero, si cumple ambas 
condiciones entra a la variable suma previamente inicializada con 0
*/

do {
    var ingreso = prompt("ingresa un número");


    if (ingreso != "fin" && parseInt(ingreso) ){
  		suma = parseInt(suma) + parseInt(ingreso);  
  	}
}
while (ingreso !="fin");

console.log(suma);