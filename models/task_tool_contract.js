'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task_tool_contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  task_tool_contract.init({
    contract_id: DataTypes.INTEGER,
    task_tool_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'task_tool_contract',
  });
  return task_tool_contract;
};