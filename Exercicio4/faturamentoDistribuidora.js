/*
    4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

    SP – R$67.836,43
    RJ – R$36.678,66
    MG – R$29.229,88
    ES – R$27.165,48
    Outros – R$19.849,53

    Escreva um programa na linguagem que desejar onde calcule o percentual de 
    representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const fs = require('fs');
var dados = JSON.parse(fs.readFileSync("./faturMensal.json"));

const mediaValor = dados.map(item => item.valor).reduce((a, b) => a + b, 0);
var fatmensal = [];

for (var i = 0; i < dados.length; i++) {
    fatmensal[i] = dados[i]["valor"] / mediaValor * 100;
    console.log("Representatividade de " + dados[i]["estado"] + ": " + Math.round(fatmensal[i]) + "%");
}
