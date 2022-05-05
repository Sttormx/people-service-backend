'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task_repository extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  task_repository.init({
    task_id: DataTypes.INTEGER,
    repository_id: DataTypes.INTEGER,
    total_commit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'task_repository',
  });
  return task_repository;
};