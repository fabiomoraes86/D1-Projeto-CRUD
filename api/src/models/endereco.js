'use strict';

const clientes = require('./cliente');

module.exports = (sequelize, Sequelize) => {
    const enderecos = sequelize.define('enderecos', {
        nome_rua: Sequelize.STRING,
        numero_casa: Sequelize.INTEGER,
        complemento: Sequelize.STRING,
        cep: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
    });

    clientes.associate = (models) => {
        clientes.belongsTo(models.enderecos, {
            foreignKey: 'id',
            targetKey: 'clienteId'
        });
    };

    return enderecos;
};