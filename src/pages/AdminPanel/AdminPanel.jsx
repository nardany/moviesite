import { useState } from "react";
import style from "./AdminPanel.module.css";

export default function AdminPanel() {
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      const res = await fetch("http://localhost:8080/api/movies", {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        throw new Error(`Սերվերի սխալ: ${res.status}`);
      }

      const data = await res.json();
      console.log("Upload successful:", data);
      setStatus({ message: "Ֆիլմը հաջողությամբ ավելացվեց", type: "success" });
      e.target.reset();
    } catch (err) {
      console.error("Upload error:", err);
      setStatus({ message: "Սխալ տեղի ունեցավ ։ Խնդրում ենք փորձել կրկին։", type: "error" });
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
          required
        />
        <br />
        <input
          className={style.inputs}
          type="text"
          name="genre"
          placeholder="Ժանր"
          required
        />
        <br />
        <input
          type="number"
          name="year"
          placeholder="Տարի"
          required
        />
        <br />
        <select name="type">
          <option value="movie">Ֆիլմ</option>
          <option value="tvshow">Սերիալ</option>
        </select>
        <br />
        <label>Նկար (.jpg, .png):</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          required
        />
        <br />
        <label>Վիդեո (.mp4):</label>
        <input
          type="file"
          name="video"
          accept="video/*"
          required
        />
        <br />
        <div className={style.submitContainer}>
          <button type="submit">Ավելացնել</button>
        </div>
      </form>

      {status.message && (
        <p
          style={{
            marginTop: "20px",
            padding: "10px",
            color: status.type === "success" ? "#0f5132" : "#842029",
            backgroundColor: status.type === "success" ? "#d1e7dd" : "#f8d7da",
            border: `1px solid ${status.type === "success" ? "#badbcc" : "#f5c2c7"}`,
            borderRadius: "8px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}