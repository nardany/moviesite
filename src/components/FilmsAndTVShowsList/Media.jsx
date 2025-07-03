import style from "./Media.module.css";
import { NavLink } from "react-router-dom";

export default function MediaList({ data }) {
  return (
    <div>
      <div className={style.container}>
        {data.map((item) => (
          <div key={item.id} className={style.items}>
           <NavLink to={`/watch/${item.id}`}>
            <img src={`http://localhost:8080${item.image}`} alt={item.title} />
           </NavLink>
            <h4>{item.title}</h4>
            <p>{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}