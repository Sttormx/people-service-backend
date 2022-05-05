'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      date_in_todo: {
        type: Sequelize.DATE
      },
      date_in_progress: {
        type: Sequelize.DATE
      },
      date_in_review: {
        type: Sequelize.DATE
      },
      date_blocked: {
        type: Sequelize.DATE
      },
      date_expected_end: {
        type: Sequelize.DATE
      },
      status_task: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'status_tasks',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      project_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'projects',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      estimate: {
        type: Sequelize.INTEGER
      },
      link_branch: {
        type: Sequelize.STRING
      },
      pr_link: {
        type: Sequelize.STRING
      },
      total_commits: {
        type: Sequelize.INTEGER
      },
      link_video: {
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
    await queryInterface.dropTable('tasks');
  }
};