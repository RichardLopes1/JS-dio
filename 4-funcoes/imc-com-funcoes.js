function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    //quando for usar um if e else dentro de uma function usar o return em vez do console log
    if (imc < 18.5) {
        return ('Abaixo do peso');

    } else if (imc >= 18 && imc < 25) {
        return ('peso normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return ('obeso');
    } else {
        return ('obesidade grave');

    }
}

function main() {
    const peso = 63;
    const altura = 1.70;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main(); //sempre que usar a function main, retorna ela.


