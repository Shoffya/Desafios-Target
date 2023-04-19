/*
    3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
    faça um programa, na linguagem que desejar, que calcule e retorne:

        • O menor valor de faturamento ocorrido em um dia do mês;
        • O maior valor de faturamento ocorrido em um dia do mês;
        • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
*/

const fs = require('fs');
var dados = JSON.parse(fs.readFileSync("./dados.json"));

var dadosFiltrados = dados.filter(({ valor }) => valor > 0);
var minValor = Math.min(...dadosFiltrados.map(item => item.valor));
var maxValor = Math.max(...dadosFiltrados.map(item => item.valor));
const mediaValor = dadosFiltrados.map(item => item.valor).reduce((a, b) => a + b, 0) / dadosFiltrados.length;

var minFaturamento = dadosFiltrados.filter(item => item.valor === minValor)
var maxFaturamento = dadosFiltrados.filter(item => item.valor === maxValor)
var qtdDiasSuperior = dadosFiltrados.filter(item => item.valor > mediaValor).length

console.log("Dia com o menor faturamento: " + minFaturamento[0]["dia"] + ", com valor " + minFaturamento[0]["valor"]);
console.log("Dia com o maior faturamento: " + maxFaturamento[0]["dia"] + ", com valor " + maxFaturamento[0]["valor"]);
console.log("Quantidade de dias com faturamento superior a média: " + qtdDiasSuperior);
