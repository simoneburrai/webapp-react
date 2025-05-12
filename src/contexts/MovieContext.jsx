import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";

const MovieContext = createContext();


const url = "http://127.0.0.1:3000/movies/"

const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [load, setLoad] = useState(false)




    const getMovies = () => {
        setLoad(true)
        axios.get(url)
            .then(response => {
                setMovies(response.data);
                setErrorMessage(null)
            })
            .catch(() => setErrorMessage("Errore nel caricamento della Pagina"))
            .finally(() => setLoad(false))
    }

    useEffect(getMovies, [])
    console.log(movies);

    return <MovieContext.Provider value={{ movies, url }}>
        {load && <div>Caricamento in Corso</div>}
        {errorMessage && <div className="error-alert">{errorMessage}</div>}
        {movies && children}
    </MovieContext.Provider>
}


const useMovies = () => {
    return useContext(MovieContext);
}


export { useMovies, MovieProvider };