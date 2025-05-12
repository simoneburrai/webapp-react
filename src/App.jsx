import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./defaults/DefaultLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import { MovieProvider } from "./contexts/MovieContext"
import MovieDetail from "./pages/MovieDetail"

function App() {

  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  )
}

export default App
