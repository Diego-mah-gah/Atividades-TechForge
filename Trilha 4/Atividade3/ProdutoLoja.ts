interface ProdutoLoja {
    codigo: number;
    nome: string;
  }
  
  class Loja {
    private produtos: ProdutoLoja[] = [];
  
    adicionarProduto(produto: ProdutoLoja): void {
      this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
      return this.produtos.find((produto) => produto.codigo === codigo);
    }
  }
  
  const loja = new Loja();
  loja.adicionarProduto({ codigo: 101, nome: "Camisa" });
  loja.adicionarProduto({ codigo: 202, nome: "Calça" });
  loja.adicionarProduto({ codigo: 303, nome: "Tênis" });
  
  const produto = loja.buscarProdutoPorCodigo(202);
  if (produto) {
    console.log(`Produto encontrado: ${produto.nome}`);
  } else {
    console.log("Produto não encontrado.");
  }
  