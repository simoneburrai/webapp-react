import { useParams } from "react-router-dom";
import { useMovies } from "../contexts/MovieContext"
import { useEffect, useState } from "react";
import axios from "axios";
import StarRating from "../components/StarRating";
import ReviewCard from "../components/ReviewCard";


const MovieDetail = () => {

    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState(null);
    const { url } = useMovies();
    const { id } = useParams();
    const movieUrl = `${url}${id}`;

    function getMovie() {
        axios.get(movieUrl)
            .then(response => {
                setMovie(response.data.movie);
                setReviews(response.data.reviews);

            })
            .catch(error => console.log(error));
    }

    useEffect(getMovie, [])


    return <div className="movie-page">
        {movie && <div className="movie-detail">
            <div className="image-container">
                <img src={movie.image} alt={movie.title} />
            </div>
            <div className="info-movie">
                <h1>{movie.title}</h1>
                <h3>{movie.genre}</h3>
                <h4>{movie.director}</h4>
                <p>{movie.abstract}</p>
                <div>{movie.release_year}</div>
                <StarRating vote={Math.round(movie.average_vote)} />
            </div>
        </div>}
        {reviews && <ReviewCard props={{getMovie, id, reviews }}/>}
    </div>
}


export default MovieDetail;