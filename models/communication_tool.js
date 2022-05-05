'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class communication_tool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  communication_tool.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'communication_tool',
  });
  return communication_tool;
};