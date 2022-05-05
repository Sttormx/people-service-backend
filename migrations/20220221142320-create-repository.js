'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('repositories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      link: {
        type: Sequelize.STRING
      },
      ssh_link: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('repositories');
  }
};