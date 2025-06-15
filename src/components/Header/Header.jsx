import { Navigate, useLocation,useNavigate } from "react-router"
import style from "./Header.module.css"


export default function Header(){
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const toContactPage = ()=>{
        navigate("/contact")
    }
    const titles = {
        "/" : "Home",
        "/about" : "About Us",
        "/movies" : "Movies",
        "/tvshows" : "TV Shows",
        "/contact" : "Contact Us"
    }
    let title = titles[pathname]
    return(
        <div className={style.header}>
            <span>{title}</span>
            <button onClick={toContactPage}>Contact Us</button>
        </div>
    )
}