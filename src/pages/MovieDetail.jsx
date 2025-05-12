import { useParams } from "react-router-dom";
import { useMovies } from "../contexts/MovieContext"

const MovieDetail = () => {

    const movies = useMovies();
    console.log(movies)
    let { id } = useParams();
    id = parseInt(id);
    const movie = movies.find(movie => movie.id === id);
    return <div className="movie-detail">
        <div className="image-container">
            <img src={movie.image} alt={movie.title} />
            <div className="info-movie">
                <h1>{movie.title}</h1>
                <h3>{movie.genre}</h3>
                <h4>{movie.director}</h4>
                <p>{movie.abstract}</p>
                <div>{movie.release_year}</div>
            </div>
        </div>
    </div>
}

export default MovieDetail;