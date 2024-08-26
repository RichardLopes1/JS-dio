const precoEtiqueta = 100;
const formaDePagamento = 1; //na tabela 1 era a opcao debito


if (formaDePagamento === 1) {
    console.log(precoEtiqueta -(precoEtiqueta * 0.1)); //0.1 é os 10% de desconto
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta -(precoEtiqueta * 0.15));
} else if (formaDePagamento ===3) {
    console.log(precoEtiqueta);
} else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1)); // adicionando mais 10% de desconto
}

