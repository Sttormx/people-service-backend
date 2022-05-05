'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('task_repositories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'tasks',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      repository_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'repositories',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      total_commit: {
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
    await queryInterface.dropTable('task_repositories');
  }
};