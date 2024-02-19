import express from "express";

const app = express();
const port = 3706;

app.get("/", (req, res) => {
  res.send("Okay");
});

app.listen(port, () => {
  console.log(`Server is on.... ${port}`);
});
