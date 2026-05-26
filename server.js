const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.status(200).json("Página Inicial.")
})

app.get("/veiculos", (req, res)=>{
    res.status(200).json({
        placa: "UBX-6H58",
        modelo: "Hyunday Creta",
        anos: 2020,
        cor: "Prata Sense"
    })
})

app.listen(3000, ()=>{
    console.log("Servidor Rodando em: http://localhost:3000")
})
