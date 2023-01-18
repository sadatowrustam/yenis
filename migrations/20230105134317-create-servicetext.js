'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('servicetext', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      header_tm: {
        type: DataTypes.TEXT
      },
      header_ru: {
        type: DataTypes.TEXT
      },
      header_en: {
        type: DataTypes.TEXT
      },
      body_tm: {
        type: DataTypes.TEXT
      },
      body_ru: {
        type: DataTypes.TEXT
      },
      body_en: {
        type: DataTypes.TEXT
      },
      image: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('servicetext');
  }
};