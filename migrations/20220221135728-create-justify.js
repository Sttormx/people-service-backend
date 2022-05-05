'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Justifies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CollaboratorId: { 
        type: Sequelize.INTEGER, 
        /*references: {
            model: 'Collaborators',
            key: 'id'
        },*/
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      description: {
        type: Sequelize.STRING
      },
      date_time: {
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
    await queryInterface.dropTable('Justifies');
  }
};