import { useEffect, useState } from "react";
import style from "./Main.module.css";
import Media from "../FilmsAndTVShowsList/Media";
import { Movies, TVShows } from "../../assets/Icons";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const movieItems = data.filter(item => item.type === "movie").slice(0, 8);
        const tvshowItems = data.filter(item => item.type === "tvshow").slice(0, 8);
        setMovies(movieItems);
        setTvShows(tvshowItems);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.movies}>
        <div className={style.items}>
          <Movies stroke="#FAF9F7" />
          <h3>Movies</h3>
        </div>
        <Media data={movies} />
      </div>

      <div className={style.tvshows}>
        <div className={style.items}>
          <TVShows stroke="#FAF9F7" />
          <h3>TV Shows</h3>
        </div>
        <Media data={tvshows} />
      </div>
    </div>
  );
}