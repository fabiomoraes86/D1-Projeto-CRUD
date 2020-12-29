'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        queryInterface.createTable('clientes', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            data_nascimento: {
                type: Sequelize.STRING
            },
            cpf: {
                type: Sequelize.STRING
            },
            rg: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            }
        });
    },

    down: async(queryInterface) => {
        queryInterface.dropTable('clientes');
    }
};