'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        queryInterface.createTable('enderecos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            clienteId: {
                type: Sequelize.INTEGER,
                references: { model: 'clientes', key: 'id' },
                onDelete: 'CASCADE',
                allowNull: false,
            },
            nome_rua: {
                type: Sequelize.STRING,
                allowNull: false
            },
            numero_casa: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            complemento: {
                type: Sequelize.STRING,
                allowNull: false
            },
            cep: {
                type: Sequelize.STRING,
                allowNull: false
            },
            bairro: {
                type: Sequelize.STRING,
                allowNull: false
            },
            cidade: {
                type: Sequelize.STRING,
                allowNull: false
            },
            estado: {
                type: Sequelize.STRING,
                allowNull: false
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
        queryInterface.dropTable('enderecos');
    }
};