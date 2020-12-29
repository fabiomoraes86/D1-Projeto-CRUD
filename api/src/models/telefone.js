'use strict';

const clientes = require('./cliente');

module.exports = (sequelize, Sequelize) => {
    const telefones = sequelize.define('telefones', {
        tipo_telefone: Sequelize.STRING,
        numero_telefone: Sequelize.INTEGER
    });

    clientes.associate = (models) => {
        clientes.belongsTo(models.telefones, {
            foreignKey: 'id',
            targetKey: 'clienteId'
        });
    };

    return telefones;
};