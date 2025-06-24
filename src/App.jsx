import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import style from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./pages/AboutUs/About";
import Movies from "./pages/Movies/Movies";
import TVShows from "./pages/TvShows/TVShows";
import Contact from "./pages/Contact/Contact";
import Genre from "./pages/Genre/Genere";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

function LayoutWrapper({ children, isNavOpen, setIsNavOpen }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className={style.app}>
      <div className={style.sidebar}>
        <NavBar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      </div>
      <div className={style.mainArea}>
        <Header setIsNavOpen={setIsNavOpen} />
        <div className={style.mainContent}>{children}</div>
      </div>
    </div>
  );
}

function AppContent({ isNavOpen, setIsNavOpen }) {
  return (
    <LayoutWrapper isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}>
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
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Router>
      <AppContent isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </Router>
  );
}
