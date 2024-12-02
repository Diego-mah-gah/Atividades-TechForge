interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
  }
  
  class BibliotecaGestao {
    private livros: LivroBiblioteca[];
  
    constructor(livros: LivroBiblioteca[]) {
      this.livros = livros;
    }
  
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }
  
    buscarPorAutor(autor: string): LivroBiblioteca[] {
      return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }
  
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
      return this.livros
        .filter(livro => livro.disponivel)
        .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
  }
  
  const biblioteca = new BibliotecaGestao([
    { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true },
    { titulo: '1984', autor: 'George Orwell', genero: 'Distopia', disponivel: false },
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true },
    { titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'Romance', disponivel: true },
  ]);

  console.log(biblioteca.filtrarPorGenero('Fantasia'));
  console.log(biblioteca.buscarPorAutor('J.R.R. Tolkien'));
  console.log(biblioteca.obterLivrosDisponiveisOrdenados());
  