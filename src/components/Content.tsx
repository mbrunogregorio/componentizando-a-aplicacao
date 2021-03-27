import { MovieCard } from './MovieCard';
import '../styles/content.scss';

interface Movie {
  imdbID: string,
  Title: string,
  Poster: string,
  Runtime: string,
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
}

interface Genre {
  title: string
}
interface ContentProps {
  movies: Movie[],
  selectedGenre: Genre
}

export function Content({ movies, selectedGenre }: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}