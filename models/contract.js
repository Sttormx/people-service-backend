'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Contract.init({
    cnpj: DataTypes.STRING,
    playlist_link: DataTypes.STRING,
    meet_id: DataTypes.INTEGER,
    tech_lead_name: DataTypes.STRING,
    communication_toolId: DataTypes.INTEGER,
    coorporative_email: DataTypes.STRING,
    estate_id: DataTypes.INTEGER,
    status_contract_id: DataTypes.INTEGER,
    begin_date_contract: DataTypes.DATE,
    date_end_contract: DataTypes.DATE,
    hours_control_link: DataTypes.STRING,
    colmeia_business_id: DataTypes.INTEGER,
    is_full_time: DataTypes.BOOLEAN,
    value: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};