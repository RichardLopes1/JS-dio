const peso = 63;
const altura = 1.70;

const imc = peso / Math.pow(altura,2); // math.pow é uma biblioteca de funções matematicas

 

if (imc < 18.5) {
    console.log('Abaixo do peso');

} else if (imc >= 18 && imc < 25) {
    console.log('peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('obeso');
} else {
    console.log('obesidade grave');

}



