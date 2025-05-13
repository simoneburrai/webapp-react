import { useParams } from "react-router-dom";
import { useMovies } from "../contexts/MovieContext"
import { useEffect, useState } from "react";
import axios from "axios";


const MovieDetail = () => {
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState(null);
    const { url } = useMovies();
    const { id } = useParams();
    const movieUrl = `${url}${id}`;

    useEffect(() => {
        axios.get(movieUrl)
            .then(response => {
                setMovie(response.data.movie)
                setReviews(response.data.reviews)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    console.log()

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
                <div>REVIEWS VOTE: {Math.round(movie.average_vote)}</div>
            </div>
        </div>}
        {reviews && <div className="movie-reviews">
            <div className="reviews-container">
                {reviews.map(review => {
                    return <div key={review.id} className="review">
                        <h4>{review.name}</h4>
                        <h5>VOTE: {review.vote}</h5>
                        <p>{review.text}</p>
                    </div>
                })}
            </div>
            <form className="reviews-form">
                <input type="text" placeholder="Inserisci la tua recensione qui" />
                <button>SEND</button>
            </form>
        </div>
        }
    </div>
}


export default MovieDetail;