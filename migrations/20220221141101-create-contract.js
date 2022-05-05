'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj: {
        type: Sequelize.STRING
      },
      playlist_link: {
        type: Sequelize.STRING
      },
      meet_id: {
        type: Sequelize.INTEGER
      },
      tech_lead_name: {
        type: Sequelize.STRING
      },
      communication_toolId: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'communication_tools',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      coorporative_email: {
        type: Sequelize.STRING
      },
      estate_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'estates',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      status_contract_id: {
        type: Sequelize.INTEGER,
        references: 
        {
            model: 'status_contracts',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      begin_date_contract: {
        type: Sequelize.DATE
      },
      date_end_contract: {
        type: Sequelize.DATE
      },
      hours_control_link: {
        type: Sequelize.STRING
      },
      colmeia_business_id: {
        type: Sequelize.INTEGER
      },
      is_full_time: {
        type: Sequelize.BOOLEAN
      },
      value: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('Contracts');
  }
};