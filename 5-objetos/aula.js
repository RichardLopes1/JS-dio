//objeto literal
const pessoa ={
    nome:'richard Lopes',
    idade: 18,
    descrever: function () {
         console.log('meu nome é ${this.nome} e minha idade é ${this.idade}');
        
    }
};

const atributo = 'idade';
console.log(pessoa['nome']);

//richard.altura = 1.73; //adicionar mais coisas dentro de um objeto
//delete richard.idade; //deletar algo que esta no objeto



