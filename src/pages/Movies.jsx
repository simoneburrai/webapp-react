import MovieCard from "../components/MovieCard";
import { useMovies } from "../contexts/MovieContext";
const Movies = () => {

    const { movies } = useMovies();

    return <div className="movies-container">
        {movies.map(movie => {
            return <MovieCard key={movie.id} movie={movie} />
        })}
    </div>
}
export default Movies;