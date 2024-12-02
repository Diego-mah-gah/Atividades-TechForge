abstract class FavoriteManager {
    protected favorites: string[] = [];
  
    abstract addFavorite(item: string): void;
  
    getFavorites(): string[] {
      return this.favorites;
    }
  }
  
  class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      if (!this.favorites.includes(item)) {
        this.favorites.push(item);
        this.favorites.sort((a, b) => a.localeCompare(b));
      } else {
        console.log(`O filme "${item}" já está na lista de favoritos.`);
      }
    }
  }
  
  class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      if (!this.favorites.includes(item)) {
        this.favorites.unshift(item);
      } else {
        console.log(`O livro "${item}" já está na lista de favoritos.`);
      }
    }
  }
  
  const moviesManager = new MoviesFavoriteManager();
  moviesManager.addFavorite("Interstellar");
  moviesManager.addFavorite("The Matrix");
  moviesManager.addFavorite("Inception");
  moviesManager.addFavorite("Pulp Fiction");
  moviesManager.addFavorite("The Dark Knight");
  moviesManager.addFavorite("Forrest Gump");
  moviesManager.addFavorite("Fight Club");
  moviesManager.addFavorite("The Shawshank Redemption");
  moviesManager.addFavorite("The Godfather");
  moviesManager.addFavorite("The Matrix");
  moviesManager.addFavorite("Forrest Gump");
  console.log("Filmes favoritos:", moviesManager.getFavorites());
  
  const booksManager = new BooksFavoriteManager();
  booksManager.addFavorite("1984");
  booksManager.addFavorite("Brave New World");
  booksManager.addFavorite("To Kill a Mockingbird");
  booksManager.addFavorite("1984");
  console.log("Books Favorites:", booksManager.getFavorites());
  