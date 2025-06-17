import Data from "../../data/Data"
import Media from "../../components/FilmsAndTVShowsList/Media"

export default function TVShows() {
  const tvshow = Data.filter(item => item.type === "tvshow");

  return <Media title="TV Show" data={tvshow} />;
}