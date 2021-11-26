const express = require ("express");

const app = express();


app.get("/", (req, res) => {
    res.send("Trabalho VM e Containers\n Componetes: Natan, Gustavo e Karol");
});

app.listen(3000);
