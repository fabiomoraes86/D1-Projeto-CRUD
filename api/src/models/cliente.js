'use strict';

module.exports = (sequelize, Sequelize) => {
    const clientes = sequelize.define('clientes', {
        nome: Sequelize.STRING,
        data_nascimento: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING
    });

    clientes.associate = (models) => {
        clientes.hasMany(models.enderecos);
        clientes.hasMany(models.telefones);
        clientes.hasMany(models.socials);
    };

    return clientes;
};