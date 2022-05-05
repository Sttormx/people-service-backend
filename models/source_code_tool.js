'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class source_code_tool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  source_code_tool.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'source_code_tool',
  });
  return source_code_tool;
};