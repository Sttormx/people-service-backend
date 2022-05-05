'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collaborator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Justify)
      this.hasMany(models.value_collaborator)
    }
  }
  Collaborator.init({
    name: DataTypes.STRING,
    areopagus_business_id: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    rg: DataTypes.STRING,
    born_date: DataTypes.DATE,
    routine_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    email_auth: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Collaborator',
  });
  return Collaborator;
};