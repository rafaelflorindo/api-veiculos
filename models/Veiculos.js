const { DataTypes } = require("sequelize");
module.exports = { sequelize, DataTypes}
const Produto = sequelize.define('Produto',{
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
return Produto;