class Pagamento {
    processar(): void {
      throw new Error("O método processar() deve ser implementado.");
    }
  }
  
  class PagamentoCartao extends Pagamento {
    private numeroCartao: string;
  
    constructor(numeroCartao: string) {
      super();
      this.numeroCartao = numeroCartao;
    }
    private validarCartao(): boolean {
      const regex = /^\d{16}$/;
      return regex.test(this.numeroCartao);
    }
    private mascararCartao(): string {
      return this.numeroCartao.slice(0, -4).replace(/\d/g, "*") + this.numeroCartao.slice(-4);
    }
    processar(): void {
      if (this.validarCartao()) {
        console.log(`Pagamento com cartão ${this.mascararCartao()} processado com sucesso!`);
      } else {
        console.log("Número do cartão inválido.");
      }
    }
  }
  
  class PagamentoBoleto extends Pagamento {
    private codigoBoleto: string | null = null;
    private gerarCodigoBoleto(): string {

      return Math.random().toString().slice(2, 28);
    }
  
    processar(): void {
      this.codigoBoleto = this.gerarCodigoBoleto();
      console.log(`Boleto gerado com sucesso! Código: ${this.codigoBoleto}`);
    }
  }
  
  function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento, index) => {
      console.log(`Processando pagamento ${index + 1}:`);
      pagamento.processar();
      console.log("----");
    });
  }
  
  const pagamentoCartao = new PagamentoCartao("1234567812345678");
  const pagamentoCartaoInvalido = new PagamentoCartao("12345");
  const pagamentoBoleto = new PagamentoBoleto();
  
  const pagamentos: Pagamento[] = [pagamentoCartao, pagamentoCartaoInvalido, pagamentoBoleto];
  processarPagamentos(pagamentos);
  