import { useEffect, useState } from "react";
import Media from "../../components/FilmsAndTVShowsList/Media";

export default function TVShows() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(item => item.type === "tvshow");
        setTvShows(filtered);
      })
      .catch((err) => console.error("Error fetching tvshows:", err));
  }, []);

  return (
    <div>
      <Media title="TV Shows" data={tvShows} />
    </div>
  );
}