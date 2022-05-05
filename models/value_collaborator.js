'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class value_collaborator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Collaborator)
    }
  }
  value_collaborator.init({
    value: DataTypes.DOUBLE,
    CollaboratorId: DataTypes.INTEGER,
    date_end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'value_collaborator',
  });
  return value_collaborator;
};