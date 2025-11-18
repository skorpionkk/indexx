const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    "IP não encontrado";

  console.log("Visitante:", ip);
  res.send("Seu IP é: " + ip);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));
