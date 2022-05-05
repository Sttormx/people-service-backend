'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('value_collaborators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.DOUBLE
      },
      CollaboratorId: {
        type: Sequelize.INTEGER
      },
      date_end: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('value_collaborators');
  }
};