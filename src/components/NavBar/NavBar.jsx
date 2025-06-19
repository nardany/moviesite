import style from "./NavBar.module.css";
import { useLocation, NavLink } from "react-router-dom";
const genres = ["Action", "Horror", "Comedy", "Drama", "Fantasy", "Sci-Fi","Thriller"];
import {
  Logo,
  Search,
  Home,
  About,
  Movies,
  TVShows,
} from "../../assets/Icons";

export default function NavBar({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();

  const basePath = pathname.includes("tvshows") ? "tvshows" : "movies";
  const handleNavClick = () => setIsOpen(false);
  return (
    <>
      {isOpen && <div className={style.overlay} onClick={() => setIsOpen(false)} />}
      <div className={`${style.navBar} ${isOpen ? style.open : ""}`}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.navBarItem}>
          <div className={style.item1}>
            <div className={style.inputFilm}>
              <Search />
              <input type="text" placeholder="Search" />
            </div>
            <div>
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
          </div>
          <div className={style.item2}>
            <div className={style.geners}>
              Geners
            </div>
            <div className={style.genersItem}>
              <ul>
              {genres.map((g) => (
        <li key={g}>
          <NavLink to={`/${basePath}/${g.toLowerCase()}`}>{g}</NavLink>
        </li>
      ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <span>© 2024 Daily Hub. All Rights Reserved.</span>
        </div>
      </div>
    </>
  );
}