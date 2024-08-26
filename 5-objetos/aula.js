class pessoa {
    nome;
    idade;

    constructor() {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - this.idade;
    }

    descrever() {//não precisa da palavra function quando estiver dentro de uma classe
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
}

/*const richard = new pessoa();
richard.nome = 'richard lopes'
richard.idade = 18;

const weslley = new pessoa();
weslley.nome = 'weslley lopes'
weslley.idade = 18;

richard.descrever();*/ 



//objeto literal
/*const pessoa ={
    nome:'richard Lopes',
    idade: 18,
    descrever: function () {
         console.log('meu nome é ${this.nome} e minha idade é ${this.idade}');

    }
};*/

//funcoes recebendo objetos
function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é o mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);

    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const richard = new pessoa('richard',18);
const weslley = new pessoa('weslley',17);

compararPessoa(richard,weslley);



/*
const atributo = 'idade';
console.log(pessoa['nome']);*/

//richard.altura = 1.73; //adicionar mais coisas dentro de um objeto
//delete richard.idade; //deletar algo que esta no objeto



