import { useEffect, useState } from "react";
import Media from "../../components/FilmsAndTVShowsList/Media";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.type === "movie");
        setMovies(filtered);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div>
      <Media title="Movies" data={movies} />
    </div>
  );
}
