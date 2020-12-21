var numeroUtente, somma;

numeroUtente = prompt('Inserisci un numero da 1 a 5');
console.log(numeroUtente);

somma = numeroUtente + numeroGenerato

function generatoreRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

for ( var i=0 ; i<=5 ; i++ ){

  var numeroGenerato = generatoreRandom(1,5);
}

console.log(numeroGenerato);


if (somma % 2 != 0) {
  console.log('Il numero è dispari')
} else {
  console.log('Il numero è pari')

}
