
const alunos = [ 'richard', 'Isabelle', 'corsi']; //quando for fazer array usar os  []

alunos.push('lopes'); // Para adicionar na lista

alunos.pop(); /// Elimina o ultimo da lista

alunos.shift(); //elimina o primeiro da lista

//  console.log(alunos[0]); //quando quiser pegar o elemento coloca as [ ] e qual voce quer pegar, sempre começa no 0.

console.log(alunos);

/----------------------------------------/

const notas = [];

notas.push(3);
notas.push(5);
notas.push(7);
notas.push(9);
notas.push(10);

let soma = 0;



for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;
console.log(media);



