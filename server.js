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
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);