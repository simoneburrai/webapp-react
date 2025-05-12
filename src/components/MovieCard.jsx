import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
    const moviePath = `/movies/${movie.id}`
    console.log(movie.image)
    return <div className="movie-card">

        <div className="image-container">
            <img src={movie.image} alt={movie.title} />
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <h4>{movie.genre}</h4>
            <p>{movie.abstract}</p>
            <button><Link to={moviePath}>More info...</Link></button>
        </div >
    </div>
}
export default MovieCard;