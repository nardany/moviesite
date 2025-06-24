import { Navigate, useLocation, useNavigate } from "react-router";
import style from "./Header.module.css";

export default function Header({ setIsNavOpen }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const toContactPage = () => {
    navigate("/contact");
  };
  const titles = {
    "/": "Home",
    "/about": "About Us",
    "/movies": "Movies",
    "/tvshows": "TV Shows",
    "/contact": "Contact Us",
    "/movies/action": "Action Movies",
    "/tvshow/action": "Action Shows",
    "/movies/horror": "Horror Movies",
    "/tvshow/horror": "Horror Shows",
    "/movies/comedy": "Comedy Movies",
    "/tvshow/comedy": "Comedy Shows",
    "/movies/drama": "Drama Movies",
    "/tvshow/drama": "Drama Shows",
    "/movies/fantasy": "Fantasy Movies",
    "/tvshow/fantasy": "Fantasy Shows",
    "/movies/thriller": "Thriller Movies",
    "/tvshow/thriller": "Thriller Shows",
    "/movies/sci-fi": "Sci-Fi Movies",
    "/tvshow/sci-fi": "Sci-Fi Shows",
  };
  let title = titles[pathname];
  return (
    <div className={style.header}>
      <button
        className={style.burger}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        ☰
      </button>
      <span>{title}</span>
      <button onClick={toContactPage} className={style.contactUsButton}>
        Contact Us
      </button>
    </div>
  );
}
