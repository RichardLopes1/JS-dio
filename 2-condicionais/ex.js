const precoGasolina = 6.66;
const precoEtanol = 5.79;
const gastoMedioEmKm = 10;
const distanciaViagemKm = 100;
const tipoCombustivel = 'Gasolina'; // o tipo de combustivel que vamos utilizar.

const valorGasto = distanciaViagemKm / gastoMedioEmKm;

if (tipoCombustivel === 'Gasolina') {
    const totalViagem = valorGasto * precoGasolina;
    console.log(totalViagem);
} else {
    const totalViagem = valorGasto * precoEtanol;
    console.log(totalViagem); //quando colocar uma const dentro de um if e else colocar o log dentro tambem.
}



