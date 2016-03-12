$(document).ready(function(){
    $('div').click(function(event){
        
        alert("Clic en Div");

        $('div').attr('style',  'color: red');
    });
    $('p').click(function(event){
        alert("Clic en parrafo");
        event.stopPropagation();
    });
  
});