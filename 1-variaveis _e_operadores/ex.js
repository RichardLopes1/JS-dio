/*faça um programa para calcular uma viagem

você tera 3 variaveis, sendo elas
1 - preço do combustivel
2 - gasto medio de combustivel do carro pro KM
3 - distancia em km de viagem

*/

const precoCombustivel = 5.79;
const gastoMedio = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / gastoMedio;
const valorGasto = litrosConsumidos * precoCombustivel; 
console.log(valorGasto);
