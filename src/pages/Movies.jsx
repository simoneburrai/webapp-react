import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../contexts/MovieContext";
import axios from "axios";

const Movies = () => {
    const [search, setSearch] = useState("");
    const { url, movies } = useMovies();
    const searchUrl = `${url}?search=`
    const [updatedMovies, setUpdatedMovies] = useState([]);

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    const onSendForm = (e) => {
        e.preventDefault();
        if (search) {
            axios.get(`${searchUrl}${search}`)
                .then(response => setUpdatedMovies(response.data))
                .catch(error => console.log(error));
        } else {
            setUpdatedMovies(movies);
        }
    }

    useEffect(() => setUpdatedMovies(movies), [movies])

    return <>
        <form className="movies-form" onSubmit={onSendForm}>
            <input type="text" placeholder="search" value={search} onChange={onSearch} />
            <button type="submit">search</button>
        </form>
        <div className="movies-container">
            {updatedMovies && updatedMovies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
    </>


}
export default Movies;