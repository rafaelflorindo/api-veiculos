const express = require("express");
const dotenv = require("dotenv/config")

const {sequelize} = require("./models");

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
const PORT = process.env.PORT || 3000;
console.log("Tentando conectar com o banco de dados.")

sequelize.sync().then(
    ()=>{
    app.listen(PORT, ()=>{
        console.log(`Servidor Rodando em: http://localhost:${PORT}`)
    })
}).catch(err => {
    console.log("Erro ao conectar: ", err)
})


/*
npm install sequelize
npm install mysql2
npm install dotenv
*/