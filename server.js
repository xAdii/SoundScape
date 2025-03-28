const express = require("express");
const fs = require("fs");
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

  res.json({
    success: true,
    message: "User registered successfully!",
    id: newId,
  });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);