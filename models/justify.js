'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Justify extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Collaborator)
    }
  }
  Justify.init({
    CollaboratorId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Justify',
  });
  return Justify;
};