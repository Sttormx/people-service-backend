'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class repository extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  repository.init({
    link: DataTypes.STRING,
    ssh_link: DataTypes.STRING,
    project_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'repository',
  });
  return repository;
};