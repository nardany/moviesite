const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const IMAGE_UPLOAD_PATH = path.join(__dirname, "uploads/images");
const VIDEO_UPLOAD_PATH = path.join(__dirname, "uploads/videos");
const DATA_PATH = path.join(__dirname, "data/movies.json");

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

app.get("/api/movies", (req, res) => {
  const data = fs.readFileSync(DATA_PATH);
  const movies = JSON.parse(data);
  res.json(movies);
});

app.post("/api/movies", upload.fields([{ name: "image" }, { name: "video" }]), (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});