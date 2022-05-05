'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('task_tool_contracts', {
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
      task_tool_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'task_tools',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('task_tool_contracts');
  }
};