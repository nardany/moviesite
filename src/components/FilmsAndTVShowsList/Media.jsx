import style from "./Media.module.css"
export default function MediaList({ data }) {
    return (
      <div>
        <div className={style.container}>
          {data.map(item => (
            <div key={item.id} className={style.items}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }