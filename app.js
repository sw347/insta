import express from "express";
// import changeCSV from "./router/changeCSV";
import csvToJson from "./router/changeCSV.js";

const app = express();
const port = 3706;

app.use("/read", csvToJson);

app.get("/", (req, res) => {
  res.send("Okay");
});

app.listen(port, () => {
  console.log(`Server is on.... ${port}`);
  console.log(`http://localhost:3706`);
});
