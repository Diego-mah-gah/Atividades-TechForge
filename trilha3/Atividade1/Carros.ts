
class Veiculo {
  mover(): void {
    console.log("O veículo está se movendo");
  }
}


class Carro extends Veiculo {
  mover(): void {
    console.log("O carro está dirigindo");
  }
}


class icicleta extends Veiculo {
  mover(): void {
    console.log("A bicicleta está pedalando");
  }
}


const carro = new Carro();
const bicicleta = new Bicicleta();

carro.mover();
bicicleta.mover();
