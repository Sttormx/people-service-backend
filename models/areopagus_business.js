'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class areopagus_business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  areopagus_business.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'areopagus_business',
  });
  return areopagus_business;
};