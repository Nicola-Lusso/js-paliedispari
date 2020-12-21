var numeroUtente,numeroGenerato, scelta;

scelta = prompt('Pari o dispari?')
console.log(scelta);

numeroUtente = prompt('Inserisci un numero da 1 a 5');
console.log(numeroUtente);

numeroGenerato = generatoreRandom(1,5);
console.log(numeroGenerato);




function generatoreRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function pariDispari(numeroUtente, numeroGenerato) {
  var somma = numeroUtente + numeroGenerato;
  if (somma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
