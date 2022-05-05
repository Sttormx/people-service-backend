'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dev_contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contract_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'Contracts',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      dev_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'Collaborators',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      status: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('dev_contracts');
  }
};