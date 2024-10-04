const express = require("express");
const app = express();

const PORT = 3333; //65K
//CRIAÇÃO DAS NOTAS
app.use(express.static(__dirname +"public")) {
  res.sendFile(__dirname + "/src/views/index.html");
};

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});
//CRIAÇÃO ROTA 404 (MIDOLEWARE)
app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/src/views/404.html");
});
app.listen(PORT, () => {
  console.log("running..." + PORT);
});
