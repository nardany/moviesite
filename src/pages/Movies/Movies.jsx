import Data from "../../data/Data"
import Media from "../../components/FilmsAndTVShowsList/Media"

export default function Movies() {
  const movies = Data.filter(item => item.type === "movie");

  return(
  <div>
      <Media title="Movies" data={movies} />
  </div>  
  ) 
}