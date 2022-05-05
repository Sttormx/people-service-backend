'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  commits.init({
    task_repository_id: DataTypes.INTEGER,
    description: DataTypes.INTEGER,
    date_time: DataTypes.DATE,
    dev_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'commits',
  });
  return commits;
};