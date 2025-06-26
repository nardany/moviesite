import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import { Logo, Search, Home, About, Movies, TVShows } from "../../assets/Icons";

const genres = [
  "Action",
  "Horror",
  "Comedy",
  "Drama",
  "Fantasy",
  "Sci-Fi",
  "Thriller",
];

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
    <div>
      {isOpen && (
        <div className={style.overlay} onClick={() => setIsOpen(false)} />
      )}
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
              <li
                onClick={() => {
                  handleNavClick();
                  navigate("/");
                }}
              >
                <div>
                  <Home />
                </div>
                <span className={style.navText}>Home</span>
              </li>
              <li
                onClick={() => {
                  handleNavClick();
                  navigate("/about");
                }}
              >
                <div>
                  <About />
                </div>
                <span className={style.navText}>About Us</span>
              </li>
              <li
                onClick={() => {
                  handleNavClick();
                  navigate("/movies");
                }}
              >
                <div>
                  <Movies />
                </div>
                <span className={style.navText}>Movies</span>
              </li>
              <li
                onClick={() => {
                  handleNavClick();
                  navigate("/tvshows");
                }}
              >
                <div>
                  <TVShows />
                </div>
                <span className={style.navText}>TV Shows</span>
              </li>
            </ul>
          </div>

          <div className={style.item2}>
            <div className={style.geners}>Geners</div>
            <div className={style.genersItem}>
              <ul>
                {genres.map((g) => (
                  <li
                    key={g}
                    onClick={() => {
                      handleNavClick();
                      navigate(`/${basePath}/${g.toLowerCase()}`);
                    }}
                  >
                    <span className={style.navText}>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
