import style from "./Main.module.css"
import Media from "../FilmsAndTVShowsList/Media"
import Data from "../../data/Data"
import { Movies, TVShows,} from "../../assets/Icons";

export default function Main(){
    const movie = Data.filter(item => item.type === "movie").slice(0,8)
    const tvshows = Data.filter(item => item.type === "tvshow").slice(0,8)

    return(
        <div className={style.container}>
            <div className={style.movies}>
                <div  className={style.items}>
                <Movies stroke="#FAF9F7"/>
                <h3>Movies</h3> 
                </div>
            <Media data={movie}/>
            </div>
            <div className={style.tvshows}>
            <div className={style.items}>
                <TVShows stroke="#FAF9F7"/>
                <h3>TV Shows</h3>
            </div>
            <Media data={tvshows}/>
            </div>
        </div>
    )
}