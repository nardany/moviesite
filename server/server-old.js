const express = require("express");
const cors = require("cors");
const path = require("path");
const movies = require("./movies");

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, "videos")));

app.get("/api/movies", (req, res) => {
  const result = movies.map(m => ({
    ...m,
    videoUrl: `http://localhost:${PORT}/${m.filename}`
  }));
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});