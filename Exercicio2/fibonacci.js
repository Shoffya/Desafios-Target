/*
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo 
    valor sempre será a soma dos 2 valores anteriores 
    (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
    linguagem que desejar onde, informado um número, ele calcule a sequência 
    de Fibonacci e retorne uma mensagem avisando se o número informado pertence 
    ou não a sequência.
*/

var n = prompt("\nDigite o número:");
var vet = [0, 1];


for (var i = 0; i < n * 2; i++) {
    vet.push(vet[i] + (vet[i + 1]));
}

var temOuNao = vet.find(element => element == n);
var VF;

if (temOuNao === undefined) {
    VF = false;
} else {
    VF = true;
}

var resultVet = alert(vet + "\n\n" + VF);