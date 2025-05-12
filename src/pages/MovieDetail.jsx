import { useParams } from "react-router-dom";
import { useMovies } from "../contexts/MovieContext"
import { useEffect, useState } from "react";
import axios from "axios";


const MovieDetail = () => {
    const [movie, setMovie] = useState(null);
    const { url } = useMovies();
    const { id } = useParams();
    const movieUrl = `${url}${id}`;

    useEffect(() => {
        axios.get(movieUrl)
            .then(response => setMovie(response.data.movie))
            .catch(error => console.log(error))
    }, [])

    console.log(movie)

    return movie && <div className="movie-detail">
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