var numeroUtente,numeroGenerato, scelta;

scelta = prompt('pari o dispari?')
console.log(scelta);

numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroUtente);

numeroGenerato = generatoreRandom(1,5);
console.log(numeroGenerato);


function generatoreRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

var somma = numeroUtente + numeroGenerato;
console.log(somma);

var risultato = pariDispari(numeroUtente, numeroGenerato);


if (scelta == risultato) {
  console.log('hai vinto!');
} else {
  console.log('ha vinto il computer');
}





function pariDispari(numeroUtente, numeroGenerato) {

  if (somma % 2 == 0) {
     console.log('La somma è pari') ;
     return ;
  } else {
    console.log('La somma è dispari') ;
    return ;
  }
}
