import { useState } from "react";
import style from "./AdminPanel.module.css";

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    year: "",
    type: "movie",
    image: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" || name === "video") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch("http://localhost:5000/api/movies", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("✅ Upload successful:", data);
    } catch (err) {
      console.error("❌ Upload error:", err);
    }
  };

  return (
    <div className={style.adminpanelContainer}>
      <h1>🎬 Ավելացնել Նոր Ֆիլմ</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          className={style.inputs}
          type="text"
          name="title"
          placeholder="Վերնագիր"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <input
          className={style.inputs}
          type="text"
          name="genre"
          placeholder="Ժանր"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="year"
          placeholder="Տարի"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <br />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="movie">Ֆիլմ</option>
          <option value="tvshow">Սերիալ</option>
        </select>
        <br />
        <label>Նկար (.jpg, .png):</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <br />
        <label>Վիդեո (.mp4):</label>
        <input
          type="file"
          name="video"
          accept="video/*"
          onChange={handleChange}
          required
        />
        <br />
        <div className={style.submitContainer}>
          <button type="submit">Ավելացնել</button>
        </div>
      </form>
    </div>
  );
}
