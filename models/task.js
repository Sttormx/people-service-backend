'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date_in_todo: DataTypes.DATE,
    date_in_progress: DataTypes.DATE,
    date_in_review: DataTypes.DATE,
    date_blocked: DataTypes.DATE,
    date_expected_end: DataTypes.DATE,
    status_task: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    estimate: DataTypes.INTEGER,
    link_branch: DataTypes.STRING,
    pr_link: DataTypes.STRING,
    total_commits: DataTypes.INTEGER,
    link_video: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};