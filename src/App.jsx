import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import style from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./pages/AboutUs/About"
import Movies from "./pages/Movies/Movies"
import TVShows from "./pages/TvShows/TVShows"
import Contact from "./pages/Contact/Contact"
function App() {
  return (
    <Router>
      <div className={style.app}>
        <div className={style.sidebar}>
          <NavBar />
        </div>
        <div className={style.mainArea}>
          <Header />
          <div className={style.mainContent}>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvshows" element={<TVShows />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
