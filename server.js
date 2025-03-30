const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const formData = req.body;

  const files = fs.readdirSync("profiles");
  const newId = files.length + 1;
  const filePath = `profiles/${newId}.json`;

  fs.writeFileSync(filePath, JSON.stringify(formData, null, 2));

  res.status(200).json({
    success: true,
    message: "User registered successfully!",
    id: newId,
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const files = fs.readdirSync("profiles");

  let userFound = null;

  for (const file of files) {
    const filePath = path.join("profiles", file);
    const fileData = fs.readFileSync(filePath, "utf-8");
    const user = JSON.parse(fileData);

    if (user.email === email && user.password === password) {
      userFound = user;
      break;
    }
  }

  if (userFound) {
    res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      user: {
        name: userFound.name,
        email: userFound.email,
      },
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
});

app.post("/upload/song", async (req, res) => {
  const song = req.body;

  const files = fs.readdirSync("songs");
  const newId = files.length + 1;
  const filePath = `songs/${newId}.json`;

  const songData = {
    ...song,
    id: newId,
  };

  fs.writeFileSync(filePath, JSON.stringify(songData, null, 2));

  res.status(201).json({
    success: true,
    message: "Song uploaded successfully!",
    song: song,
  });
});

app.post("/upload/playlist", async (req, res) => {
  const playlist = req.body;

  const files = fs.readdirSync("playlists");
  const newId = files.length + 1;
  const filePath = `playlists/${newId}.json`;

  const playlistData = {
    ...playlist,
    id: newId,
  };

  fs.writeFileSync(filePath, JSON.stringify(playlistData, null, 2), "utf-8");

  res.status(201).json({
    success: true,
    message: "Playlist uploaded successfully!",
    playlist: playlistData,
  });
});

app.get("/users/:email/songs", (req, res) => {
  const userEmail = req.params.email;
  const songFiles = fs.readdirSync("songs");

  let userSongs = [];

  songFiles.forEach((file) => {
    const filePath = path.join("songs", file);
    const songData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (songData.deleted) return;

    if (songData.uploadedBy === userEmail) {
      userSongs.push(songData);
    }
  });

  res.status(200).json({ success: true, songs: userSongs });
});

app.get("/users/:email/playlists", (req, res) => {
  const userEmail = req.params.email;
  const playlistFiles = fs.readdirSync("playlists");

  let userPlaylists = [];

  playlistFiles.forEach((file) => {
    const filePath = path.join("playlists", file);
    const playlistData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (playlistData.deleted) return;

    if (playlistData.uploadedBy === userEmail) {
      userPlaylists.push(playlistData);
    }
  });

  res.status(200).json({ success: true, playlists: userPlaylists });
});

app.get("/genres/:genre/songs", (req, res) => {
  const genre = req.params.genre;
  const songFiles = fs.readdirSync("songs");

  let filteredSongs = [];

  songFiles.forEach((file) => {
    const filePath = path.join("songs", file);
    const songData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (songData.genre === genre) {
      filteredSongs.push(songData);
    }
  });

  res.status(200).json({ success: true, songs: filteredSongs });
});

app.delete("/songs/:songid", (req, res) => {
  const { songid } = req.params;
  const filePath = `songs/${songid}.json`;

  fs.writeFileSync(filePath, JSON.stringify({ deleted: true }), "utf-8");
  res.json({ success: true, message: "Song marked as deleted" });
});

app.delete("/playlists/:playlistid", (req, res) => {
  const { playlistid } = req.params;
  const filePath = `playlists/${playlistid}.json`;

  fs.writeFileSync(
    filePath,
    JSON.stringify({ deleted: true }, null, 2),
    "utf-8"
  );
  res.json({ success: true, message: "Playlist marked as deleted" });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
