const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

// app.use(express.static("public"));

const blog = require("./routes/blog");

// ...

app.use("/blog", blog);

//middleware 1 herer next function is important because if the not provide it will stuck in the it will not respond or excute to next
app.use((req, res, next) => {
  // console.log("Middleware1 Time:", Date.now());
  req.gnani = " I am gnanendra P";
  // console.log(
  //   `Middleware1 Time: ${Date.now()}, the method you have requested is: ${
  //     req.method
  //   }`
  // );

  fs.appendFileSync(
    "logo.txt",
    `Middleware1 Time: ${new Date().toLocaleString()}, method is: ${
      req.method
    }\n`
  );
  //   res.send("the resposne form the middleware 1");
  next();
});

//middleware 2
app.use((req, res, next) => {
  console.log("Middleware2 Time:", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World midware");
  console.log("the get method");
});

app.get("/about", (req, res) => {
  res.send("Hello World midware" + req.gnani);
  console.log("the get method");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
