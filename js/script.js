var numeroUtente,numeroGenerato, scelta;

scelta = prompt('Pari o dispari?')
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

if (scelta == risultato) {
  console.log('hai vinto!');
} else {
  console.log('ha vinto il computer');
}

var risultato = pariDispari(numeroUtente, numeroGenerato);
// risultato = true;
console.log(risultato);



function pariDispari(numeroUtente, numeroGenerato) {

  if (somma % 2 == 0) {
    return console.log('La somma è pari') ;
  } else {
    return console.log('La somma è dispari') ;
  }
}
