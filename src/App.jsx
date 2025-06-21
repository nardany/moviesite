import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import style from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./pages/AboutUs/About"
import Movies from "./pages/Movies/Movies"
import TVShows from "./pages/TvShows/TVShows"
import Contact from "./pages/Contact/Contact"
import Genre from "./pages/Genre/Genere"
import MoviesPage from "./pages/MoviesPage/MoviesPage"; 
import MovieDetails from "./pages/MovieDetails/MovieDetails"
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Router>
      <div className={style.app}>
        <div className={style.sidebar}>
        <NavBar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        </div>
        <div className={style.mainArea}>
          
          <Header setIsNavOpen={setIsNavOpen}  />
          <div className={style.mainContent}>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvshows" element={<TVShows />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/movies/:genre" element={<Genre />} />
              <Route path="/tvshows/:genre" element={<Genre />} />
              <Route path="/all-movies" element={<MoviesPage />} />
              <Route path="/watch/:id" element={<MovieDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
