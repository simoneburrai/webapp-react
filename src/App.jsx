import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./defaults/DefaultLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
