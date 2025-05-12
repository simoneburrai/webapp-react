import { Link } from "react-router-dom";


const Home = () => {
    return <div className="home">
        <h1>ALL THE MOVIES</h1>
        <h3>click the button below to see all the movies</h3>
        <button><Link to="/movies">MOVIES</Link></button>
    </div>

}


export default Home;