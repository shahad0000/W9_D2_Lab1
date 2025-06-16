const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.redirect(303, "/hello-world");
});

app.get("/hello-world", (req, res) => {
  res.redirect(303, "/hello-world.json");
});

app.get("/hello-world.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.end(JSON.stringify({ "request method": `${req.method}` }, null, 3));
});

app.use((req, res) => {
  res.status(404).send("Oops, this page does not exist.");
});

app.use((req, res) => {
  if (req.method !== "GET") {
    res.status(405).send("You can only use GET requests");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
