import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import {
  Logo,
  Search,
  Home,
  About,
  Movies,
  TVShows,
} from "../../assets/Icons";

const genres = ["Action", "Horror", "Comedy", "Drama", "Fantasy", "Sci-Fi", "Thriller"];

export default function NavBar({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const basePath = pathname.includes("tvshows") ? "tvshows" : "movies";

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim()) {
      fetch("http://localhost:5000/api/movies")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setResults(filtered);
        });
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleSelectMovie = (id) => {
    setSearchTerm("");
    setResults([]);
    setIsOpen(false);
    navigate(`/watch/${id}`);
  };

  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      {isOpen && <div className={style.overlay} onClick={() => setIsOpen(false)} />}
      <div className={`${style.navBar} ${isOpen ? style.open : ""}`}>
        <div className={style.logo}>
        <NavLink to="/" onClick={handleNavClick}>
          <Logo />
        </NavLink>
        </div>
        <div className={style.navBarItem}>
          <div className={style.item1}>
            <div className={style.inputFilm}>
              <Search />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                {results.length > 0 && (
                  <div className={style.searchResults}>
                    {results.map((movie) => (
                      <div
                        key={movie.id}
                        className={style.resultItem}
                        onClick={() => handleSelectMovie(movie.id)}
                      >
                        🎬 {movie.title}
                      </div>
                    ))}
                  </div>
                )}
            </div>


            <ul>
              <li>
                <div><Home /></div>
                <NavLink to="/" onClick={handleNavClick}>Home</NavLink>
              </li>
              <li>
                <div><About /></div>
                <NavLink to="/about" onClick={handleNavClick}>About Us</NavLink>
              </li>
              <li>
                <div><Movies /></div>
                <NavLink to="/movies" onClick={handleNavClick}>Movies</NavLink>
              </li>
              <li>
                <div><TVShows /></div>
                <NavLink to="/tvshows" onClick={handleNavClick}>TV Shows</NavLink>
              </li>
            </ul>
          </div>

          <div className={style.item2}>
            <div className={style.geners}>Geners</div>
            <div className={style.genersItem}>
              <ul>
                {genres.map((g) => (
                  <li key={g}>
                    <NavLink to={`/${basePath}/${g.toLowerCase()}`} onClick={handleNavClick}>
                      {g}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}