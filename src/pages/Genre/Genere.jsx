import { useParams, useLocation } from "react-router-dom";
import Data from "../../data/Data";
import Media from "../../components/FilmsAndTVShowsList/Media";

export default function Genre() {
  const { genre } = useParams();
  const { pathname } = useLocation();
  const type = pathname.startsWith("/movies") ? "movie" : "tvshow";
  const filteredData = Data.filter(
    (item) =>
      item.type === type &&
      item.genre.toLowerCase() === genre.toLowerCase()
  );
  return (
    <div>
      <Media data={filteredData} />
    </div>
  );
}