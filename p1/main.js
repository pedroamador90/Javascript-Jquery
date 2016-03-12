

var arr=['a',1,2,3, '$',4 ];
var suma = 0;
var promedio = 0;


arr.forEach(function(elem,index){

	if (parseInt(elem)){
		//alert("es numero");
		suma = suma + elem;
	}

}); 



console.log(suma);

