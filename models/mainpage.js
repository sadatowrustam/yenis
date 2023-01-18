'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mainpage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Images}) {
      this.hasMany(Images, {as:"images",foreignKey:"mainId"})
    }
  }
  Mainpage.init({
    text_big_tm: DataTypes.STRING,
    text_big_ru: DataTypes.STRING,
    text_big_en: DataTypes.STRING,
    text_small_tm: DataTypes.STRING,
    text_small_ru: DataTypes.STRING,
    text_small_en: DataTypes.STRING,
  }, {
    sequelize,
    tableName:"mainpage",
    modelName: 'Mainpage',
  });
  return Mainpage;
};