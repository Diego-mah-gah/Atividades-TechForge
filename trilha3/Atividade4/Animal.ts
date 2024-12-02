class Animal {
    private energia: number;
  
    constructor(energiaInicial: number = 50) {
      this.energia = energiaInicial;
    }
  
    protected aumentarEnergia(valor: number): void {
      this.energia += valor;
    }
  
    protected reduzirEnergia(valor: number): void {
      this.energia -= valor;
      if (this.energia < 0) {
        this.energia = 0;
      }
    }
  
    public statusEnergia(): void {
      console.log(`Energia atual: ${this.energia}`);
    }
  
    public comer(): void {
      console.log("O animal está comendo...");
      this.aumentarEnergia(10);
    }
  }
  
  class Leao extends Animal {
    constructor(energiaInicial: number = 100) {
      super(energiaInicial);
    }
  
    public comer(): void {
      console.log("O leão está caçando...");
      this.reduzirEnergia(30);
      console.log("O leão capturou a presa e está se alimentando!");
      super.comer();
    }
  }
  

  class Passaro extends Animal {
    constructor(energiaInicial: number = 30) {
      super(energiaInicial);
    }
  
    public comer(): void {
      console.log("O pássaro está se alimentando de sementes...");
      super.comer();
    }
  }

  function interagirComAnimais(animais: Animal[]): void {
    animais.forEach((animal, index) => {
      console.log(`Animal ${index + 1}:`);
      animal.comer();
      animal.statusEnergia();
      console.log("----");
    });
  }
  

  const leao = new Leao();
  const passaro = new Passaro();
  
  const animais: Animal[] = [leao, passaro];
  interagirComAnimais(animais);
  