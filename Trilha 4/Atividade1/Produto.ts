interface Produto {
  id: number;
  nome: string;
  preco: number;
}

class ItemLoja implements Produto {
  id: number;
  nome: string;
  preco: number;

  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }
}

const item1 = new ItemLoja(1, "Boneco Optimus Prime", 150.00);
const item2 = new ItemLoja(2, "Boneco Bumblebee", 120.00);

console.log(item1);
console.log(item2); 
