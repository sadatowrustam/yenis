'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mainpage', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text_big_tm: {
        type: Sequelize.STRING
      },
      text_big_ru: {
        type: Sequelize.STRING
      },
      text_big_en: {
        type: Sequelize.STRING
      },
      text_small_tm: {
        type: Sequelize.STRING
      },
      text_small_ru: {
        type: Sequelize.STRING
      },
      text_small_en: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mainpage');
  }
};