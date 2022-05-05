'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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
      status_project: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'status_projects',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      documentation_id: {
        type: Sequelize.INTEGER
      },
      doc_linl: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('projects');
  }
};