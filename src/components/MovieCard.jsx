
const MovieCard = ({ movie }) => {
    return <div className="movie-card">
        <h3>{movie.title}</h3>
        <p>{movie.abstract}</p>
    </div>
}
export default MovieCard;