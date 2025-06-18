import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  Logo,
  Search,
  Home,
  About,
  Movies,
  TVShows,
} from "../../assets/Icons";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => {
    setIsOpen(false); // 
  };
  return (
    <>
        <button className={style.burger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
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
                <li><NavLink>Action</NavLink></li>
                <li><NavLink>Comedy</NavLink></li>
                <li><NavLink>Drama</NavLink></li>
                <li><NavLink>Thriller</NavLink></li>
                <li><NavLink>Sci-Fi</NavLink></li>
                <li><NavLink>Fantasy</NavLink></li>
                <li><NavLink>Horror</NavLink></li>
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