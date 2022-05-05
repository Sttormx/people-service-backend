'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Collaborators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      areopagus_business_id: {
        type: Sequelize.INTEGER
      },
      cpf: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING
      },
      born_date: {
        type: Sequelize.DATE
      },
      routine_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email_auth: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'Pendent'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Collaborators');
  }
};