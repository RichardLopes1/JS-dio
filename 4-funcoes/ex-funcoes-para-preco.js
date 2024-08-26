function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto /100)));
}

function aplicarJuros(valor,juros){
    return(valor + (valor * (juros / 100)))
}

const precoEtiqueta = 100;
const formaDePagamento = 4; //na tabela 1 era a opcao debito


if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta,10) );
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta,15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta,10)
)}


