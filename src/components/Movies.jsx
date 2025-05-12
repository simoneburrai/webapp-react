import axios from "axios";
const url = "http://localhost:3000/movies"
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Movies = () => {
    const [movies, setMovies] = useState([]);


    const getBooks = () => {
        axios.get(url)
            .then(response => {
                setMovies(response.data)
            })
    }
    useEffect(getBooks, []);

    return <div className="movies-container">
        {movies.map(movie => {
            return <MovieCard key={movie.id} movie={movie} />
        })}
    </div>
}
export default Movies;