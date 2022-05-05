'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('commits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_repository_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'task_repositories',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      description: {
        type: Sequelize.INTEGER
      },
      date_time: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('commits');
  }
};