function escrevaMeuNome(nome) {
   return'meu nome é ' + nome;
}



function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('richard') + ' maior de idade'); //neste codigo estamos colocando uma function dentro de outra.

    } else {
        console.log('você é menor de idade');

    }


}

verificarIdade(18);//para retornar uma função so chamar ela dentro de parenteses;

