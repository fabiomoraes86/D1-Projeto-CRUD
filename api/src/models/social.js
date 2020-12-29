'use strict';

const clientes = require('./cliente');

module.exports = (sequelize, Sequelize) => {
    const socials = sequelize.define('socials', {
        nome_rede_social: Sequelize.STRING,
        link_rede_social: Sequelize.INTEGER
    });

    clientes.associate = (models) => {
        clientes.belongsTo(models.social, {
            foreignKey: 'id',
            targetKey: 'clienteId'
        });
    };

    return socials;
};