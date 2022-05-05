'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status_contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  status_contract.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'status_contract',
  });
  return status_contract;
};