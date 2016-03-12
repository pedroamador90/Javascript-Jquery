$(document).ready(function($) {

	$('#btnenviar').click(function(event) {
		
		if ($('#mail').val() == ""){

			alert("Proporciona tu correo por favor");
		}
		/*else
		{
			alert($('#mail').val());
		}


		*/

		var Personas = new persona($('#nombre').val() , $('#mail').val() , $('#combo').val() );

		console.log(Personas);

	});
	
});


  function persona (nombre, correo, sexo){
   this.nombre = nombre;
    this.correo = correo;
    this.sexo = sexo;
};

