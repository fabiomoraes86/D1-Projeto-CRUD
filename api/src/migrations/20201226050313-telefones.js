'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        queryInterface.createTable('telefones', {
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
            tipo_telefone: {
                type: Sequelize.STRING,
                allowNull: false
            },
            numero_telefone: {
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
        })
    },

    down: async(queryInterface) => {
        queryInterface.dropTable('telefones');
    }
};