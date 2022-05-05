'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('calendars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
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
      status: {
        type: Sequelize.INTEGER
      },
      is_english: {
        type: Sequelize.BOOLEAN
      },
      is_levi_signature: {
        type: Sequelize.BOOLEAN
      },
      is_pr: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('calendars');
  }
};