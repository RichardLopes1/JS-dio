const nota1 = 5;
const nota2 = 5;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);


if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) { //quando quiser fazer uma conta "entre tal numero colocar desse jeito com dois && comercial e repetir a variavel"
    console.log('Você esta de recuperação');

} else {
    console.log('passou de semestre');
}


