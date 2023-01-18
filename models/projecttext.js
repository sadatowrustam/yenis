'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projecttext extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projecttext.init({
    header_tm: DataTypes.TEXT,
    header_en: DataTypes.TEXT,
    header_ru: DataTypes.TEXT,
    body_tm: DataTypes.TEXT,
    body_ru: DataTypes.TEXT,
    body_en: DataTypes.TEXT
  }, {
    sequelize,
    tableName:"projecttext",
    modelName: 'Projecttext',
  });
  return Projecttext;
};