const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "gnanendrap.com";
  let searchText = "Search Now";
  let arr = ["gnani", "1", 22];

  res.render("index", {
    siteName: siteName,
    searchText: searchText,
    arr,
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "gnanendrap.com why ?";
  let blogContant = "why gnanendrap because he good at development";
  res.render("blogPost", {
    blogTitle: blogTitle,
    blogContant: blogContant,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
