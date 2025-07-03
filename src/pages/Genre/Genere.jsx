import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Media from "../../components/FilmsAndTVShowsList/Media";

export default function Genre() {
  const { genre } = useParams();
  const location = useLocation();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    const type = path.includes("/movies/") ? "movie" : "tvshow";
    fetch("http://localhost:8080/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) =>
            item.type === type &&
            item.genre.toLowerCase() === genre.toLowerCase()
        );
        setFilteredData(filtered);
      })
      .catch((err) => console.error("Error fetching genre:", err));
  }, [genre, location.pathname]);

  return (
    <div>
      <Media data={filteredData} />
    </div>
  )
}
