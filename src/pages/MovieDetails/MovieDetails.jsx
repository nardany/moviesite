import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(item => item.id === Number(id));
        setMovie(found);
      });
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={style.container}>
      <div className={style.details}>
        <img src={movie.image} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre}</p>
        </div>
      </div>
      <div className={style.videoBox}>
        <video width="100%" controls>
          <source src={movie.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}