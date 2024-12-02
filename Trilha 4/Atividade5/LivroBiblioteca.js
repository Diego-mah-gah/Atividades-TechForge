var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao(livros) {
        this.livros = livros;
    }
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (livro) { return livro.genero.toLowerCase() === genero.toLowerCase(); });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (livro) { return livro.autor.toLowerCase() === autor.toLowerCase(); });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (livro) { return livro.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    return BibliotecaGestao;
}());
var biblioteca = new BibliotecaGestao([
    { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true },
    { titulo: '1984', autor: 'George Orwell', genero: 'Distopia', disponivel: false },
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true },
    { titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'Romance', disponivel: true },
]);
console.log(biblioteca.filtrarPorGenero('Fantasia'));
console.log(biblioteca.buscarPorAutor('J.R.R. Tolkien'));
console.log(biblioteca.obterLivrosDisponiveisOrdenados());
