var contador = 5;



$(document).ready(function () {
    $('#botoni').click(function () {

    	
    	contador = contador + 1;


        /* si el textbox cadena tiene valor, lo concatenamos en lugar del numeo que sigue*/
        if ($('#cadena').val() != ""){
            $('ul').append('<li>' + $('#cadena').val() + '</li>');
        }
        else{

            $('ul').append('<li>' + contador + '</li>');    
        }

       
       /*Si tiene un color el textboxl, le agregamos el estilo */
         if ($('#color').val() != ""){
            $('li').eq(contador - 1).attr('style',  'color:' + $('#color').val());
        };  

       
    });
});

/*Borramos el LI que tenga la primera posición*/
$(document).ready(function () {
    $('#botone').click(function () {

    	$('li').eq(0).remove();
    	
    	
    });
});

