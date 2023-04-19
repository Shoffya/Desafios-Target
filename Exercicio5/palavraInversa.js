/*
    5) Escreva um programa que inverta os caracteres de um string.
*/

var palavra = prompt("\nDigite uma palavra:");

var vet = [];

for (var i = palavra.length - 1; i >= 0; i--) {
    vet.push(palavra[i]);
}

const palavraInvertida = vet.join("");

const resultado = alert(palavraInvertida);

console.log(palavraInvertida);