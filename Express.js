import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

// app.post or app.get or app.delete or app.put (path, handler)
app.get("/", (req, res) => {
  res.send("Hello World gnani");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact me");
});

app.get("/blog", (req, res) => {
  res.send("Blog");
});

app.get("/gnani/:slug", (req, res) => {
  res.send(`Hello these is ${req.params.slug}`);
  console.log(req.params);
  console.log(req.query);
});

app.get("/blog/into-to-expressjs", (req, res) => {
  //logic form fetch intro expressjs from db
  res.send("Hi start learning to expressjs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
