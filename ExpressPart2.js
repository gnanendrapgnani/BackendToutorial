import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

// Manually define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static("public"));

// these is normal syntx

app.get("/", (req, res) => {
  console.log("get  ");
  res.send("Hello World These get request");
});

app.post("/", (req, res) => {
  console.log("post");
  res.send("Hello World These post request");
});

app.put("/", (req, res) => {
  console.log("Helo world These is the put request");
  res.send("Helo world put request");
});

app.get("/index", (req, res) => {
  console.log("index");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  console.log("index");
  res.json({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    name: ["gnanni", "lakshmi", "rakshitha"],
  });
});
// these is is chaining request in express

// app
//   .get("/", (req, res) => {
//     console.log("get  ");
//     res.send("Hello World These get request");
//   })
//   .post("/", (req, res) => {
//     console.log("post");
//     res.send("Hello World These post request");
//   })
//   .put("/", (req, res) => {
//     console.log("Helo world These is the put request");
//     res.send("Helo world put request");
//   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
