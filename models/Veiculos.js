//faltou importar o database
const sequelize = require("../config/database");

const { DataTypes } = require("sequelize");

//module.exports = { sequelize, DataTypes}
const Veiculo = sequelize.define('Veiculo',{
    placa:{
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ano:{
        type: DataTypes.INTEGER,
        validate:{
            min: 1901,
            max: 2155
        },
        allowNull: false
    },
    cor:{
        type: DataTypes.STRING,
        allowNull: false
    },
    preco:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    linkImagem:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = Veiculo;