abstract class Funcionario {
    private nome: string;
    private salario: number;
  
    constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public getSalario(): number {
      return this.salario;
    }

    public abstract calcularBonus(): number;
  
    public calcularSalarioComBonus(): number {
      return this.getSalario() + this.calcularBonus();
    }
  }

  class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
      super(nome, salario);
    }
  
    public calcularBonus(): number {
      return this.getSalario() * 0.1;
    }
  }

  class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
      super(nome, salario);
    }
  
    public calcularBonus(): number {
      return this.getSalario() * 0.05;
    }
  }
  
  function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach((funcionario) => {
      console.log(`Funcionário: ${funcionario.getNome()}`);
      console.log(`Salário base: R$ ${funcionario.getSalario().toFixed(2)}`);
      console.log(`Bônus: R$ ${funcionario.calcularBonus().toFixed(2)}`);
      console.log(`Salário final: R$ ${funcionario.calcularSalarioComBonus().toFixed(2)}`);
      console.log("----");
    });
  }
  
  const gerente = new Gerente("Matheus", 6300);
  const operario1 = new Operario("Ana", 2200);
  const operario2 = new Operario("Pedro", 3500);
  
  const funcionarios: Funcionario[] = [gerente, operario1, operario2];
  calcularSalariosComBonus(funcionarios);
  