import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useMovies } from "../contexts/MovieContext"
import Loader from "../components/Loader"
const DefaultLayout = () => {
    const {load} = useMovies()
    return <>
        <Header />
        <main>
            {!load && <Outlet/>}
            {load && <Loader/>}
        </main>
        <footer>----Footer-----</footer>
    </>
}

export default DefaultLayout