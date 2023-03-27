$(document).ready(function(){
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(result){
        //   console.log(result.imie)
     let par = $('<p></p>');
     par.text(`Imię: ${result.imie}, ${result.nazwisko}`);
     $('body').append(par)
      });
})