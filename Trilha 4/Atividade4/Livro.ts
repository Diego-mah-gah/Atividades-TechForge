interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
  }
  
  class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
      this.livros.push(livro);
    }
  
    buscarLivrosDisponiveis(): Livro[] {
      return this.livros.filter((livro) => livro.disponivel);
    }
  }
  
  const biblioteca = new Biblioteca();
  biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true });
  biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: false });
  biblioteca.adicionarLivro({ titulo: "Dom Quixote", autor: "Miguel de Cervantes", disponivel: true });
  biblioteca.adicionarLivro({ titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", disponivel: true });
  biblioteca.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: false });
  biblioteca.adicionarLivro({ titulo: "A Revolução dos Bichos", autor: "George Orwell", disponivel: true });
  biblioteca.adicionarLivro({ titulo: "O Código Da Vinci", autor: "Dan Brown", disponivel: true });
  
  const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
  console.log("Livros disponíveis:", livrosDisponiveis);
  