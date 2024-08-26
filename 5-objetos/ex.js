class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm =gastoMedioPorKm ;
    }

    calcularGatoDePercurso(distanciaEmKm,precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;       }
    
 }





const palio = new Carro('fiat','bege',1/10);

console.log (palio.calcularGatoDePercurso(70,5));

