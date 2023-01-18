'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projecttext', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      header_tm: {
        type: Sequelize.TEXT
      },
      header_en: {
        type: Sequelize.TEXT
      },
      header_ru: {
        type: Sequelize.TEXT
      },
      body_tm: {
        type: Sequelize.TEXT
      },
      body_ru: {
        type: Sequelize.TEXT
      },
      body_en: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('projecttext');
  }
};