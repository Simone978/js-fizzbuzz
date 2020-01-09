// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.

var lista = document.getElementById('lista');
var i=1;
while (i<=100) {
  if((i%5==0) && (i%3==0)){
      lista.innerHTML += '<li>' + 'FizzBuzz' + '</li>';
    }else if(i%5==0){
      lista.innerHTML += '<li>' + 'Buzz' + '</li>';
    }else if(i%3==0){
      lista.innerHTML += '<li>' + 'Fizz' + '</li>';
    }else{
      lista.innerHTML += '<li>' + i + '</li>';;
    }
    i++;
}
