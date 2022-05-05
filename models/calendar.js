'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  calendar.init({
    date: DataTypes.DATE,
    dev_id: DataTypes.INTEGER,
    task_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    is_english: DataTypes.BOOLEAN,
    is_levi_signature: DataTypes.BOOLEAN,
    is_pr: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'calendar',
  });
  return calendar;
};