import { Navigate, useLocation,useNavigate } from "react-router"
import style from "./Header.module.css"

export default function Header({ setIsNavOpen }) {
  const navigate = useNavigate()
  const { pathname } = useLocation();
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
        <button className={style.burger} onClick={() => setIsNavOpen(prev => !prev)}>
          ☰
        </button>
            <span>{title}</span>
            <button onClick={toContactPage} className={style.contactUsButton}>Contact Us</button>
        </div>
    )
}