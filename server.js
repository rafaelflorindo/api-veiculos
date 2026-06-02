//const dotenv = require("dotenv/config")
require("dotenv").config();

const express = require("express");

//importar a conexão
const sequelize = require("./config/database");

//importar os modelos
const Veiculo = require("./models/Veiculos");

const app = express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.status(200).json("Página Inicial.")
})

/*app.get("/veiculos", (req, res)=>{
    res.status(200).json({
        placa: "UBX-6H58",
        modelo: "Hyunday Creta",
        anos: 2020,
        cor: "Prata Sense"
    })
})*/

// Listar veículos
app.get("/veiculos", async (req, res) => {
    try {
        // Busca todos os registros na tabela de Produtos
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

        // Passa apenas os campos validados para o banco
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
            veiculo // Short-hand para veiculo: veiculo
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