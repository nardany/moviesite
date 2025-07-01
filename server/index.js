const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8080;

const IMAGE_UPLOAD_PATH = path.join(__dirname, "upload/images");
const VIDEO_UPLOAD_PATH = path.join(__dirname, "upload/videos");
const DATA_PATH = path.join(__dirname, "data/movies.json");

fs.mkdirSync(IMAGE_UPLOAD_PATH, { recursive: true });
fs.mkdirSync(VIDEO_UPLOAD_PATH, { recursive: true });
fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
if (!fs.existsSync(DATA_PATH)) {
  fs.writeFileSync(DATA_PATH, "[]");
}

app.use(cors());
app.use(express.json());
app.use("/images", express.static(IMAGE_UPLOAD_PATH));
app.use("/videos", express.static(VIDEO_UPLOAD_PATH));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, IMAGE_UPLOAD_PATH);
    } else if (file.mimetype.startsWith("video")) {
      cb(null, VIDEO_UPLOAD_PATH);
    } else {
      cb(new Error("Unsupported file type"), null);
    }
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

app.get("/api/movies", (req, res,) => {
  try {
    const data = fs.readFileSync(DATA_PATH);
    const movies = JSON.parse(data);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: "Could not read movie data." });
  }
});

app.post("/api/movies", upload.fields([{ name: "image" }, { name: "video" }]), (req, res) => {
  try {
    const { title, genre, type, year } = req.body;
    const image = req.files["image"]?.[0]?.filename || "";
    const video = req.files["video"]?.[0]?.filename || "";

    const newMovie = {
      id: Date.now(),
      title,
      genre,
      type,
      year: Number(year),
      image: `/images/${image}`,
      videoUrl: `/videos/${video}`,
    };

    const raw = fs.readFileSync(DATA_PATH);
    const data = JSON.parse(raw);
    data.push(newMovie);
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

    res.status(201).json({ message: "Movie added!", movie: newMovie });
  } catch (error) {
    console.error("❌ Error adding movie:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});