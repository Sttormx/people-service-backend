'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('source_code_tool_contracts', {
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
      source_code_tool_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'source_code_tools',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      link: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('source_code_tool_contracts');
  }
};