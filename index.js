const express = require("express");
const app = express();

const PORT = 3333; //65K

app.get("/", function (req, res) {
  res.send("KKKKK");
});

app.listen(PORT, () => {
  console.log("running..." + PORT);
});
