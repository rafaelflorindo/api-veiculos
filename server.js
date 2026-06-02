require("dotenv").config();

const express = require("express");


const sequelize = require("./config/database");

const Veiculo = require("./models/Veiculos");

const app = express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.status(200).json("Página Inicial.")
})

// Listar veículos
app.get("/veiculos", async (req, res) => {
    try {

        const veiculos = await Veiculo.findAll();
        
        // Retorna a lista para o cliente
        res.status(200).json(veiculos);
    } catch (error) {
        res.status(500).json({ 
            mensagem: "Erro ao buscar veículos.", 
            erro: error.message 
        });
    }
});

app.post("/veiculos", async (req, res) => {
    try {
        const { placa, modelo, ano, cor, preco, linkImagem } = req.body;

        const veiculo = await Veiculo.create({
            placa,
            modelo,
            ano,
            cor,
            preco,
            linkImagem
        });

        res.status(201).json({
            mensagem: "Veículo cadastrado com sucesso.",
            veiculo 
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao cadastrar.", erro: error.message });
    }
});

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
