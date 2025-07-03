import { useEffect, useState } from "react";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id} style={{ marginBottom: "30px" }}>
          <h3>{movie.title}</h3>
          <p>Genre: {movie.genre}</p>
          <p>Year: {movie.year}</p>
          <video width="320" controls>
            <source src={movie.videoUrl} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}