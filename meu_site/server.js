const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    console.log("Visitante:", ip); // Aqui você vê o IP real no console

    res.send("Seu IP é: " + ip);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
